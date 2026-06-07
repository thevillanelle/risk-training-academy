"""
Risk Training Hub — FastAPI Server
Serves the frontend and exposes /api/kb for knowledge base queries.

Observability:
  - Structured JSON logging on every request (stdout → GitHub Pages captures)
  - Middleware for request timing + error tracking
  - In-memory metrics counters exposed at /metrics
"""
from fastapi import FastAPI, Query, Request
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
import json, os, re, time, logging, traceback
from collections import defaultdict

# ── Structured JSON logger ────────────────────────────────────────────────────

class JSONFormatter(logging.Formatter):
    def format(self, record):
        log = {
            "timestamp": self.formatTime(record, "%Y-%m-%dT%H:%M:%SZ"),
            "level":     record.levelname,
            "message":   record.getMessage(),
        }
        if hasattr(record, "extra"):
            log.update(record.extra)
        if record.exc_info:
            log["traceback"] = self.formatException(record.exc_info)
        return json.dumps(log)

handler = logging.StreamHandler()
handler.setFormatter(JSONFormatter())
logger = logging.getLogger("rth")
logger.setLevel(logging.INFO)
logger.addHandler(handler)
logger.propagate = False

# ── In-memory metrics ─────────────────────────────────────────────────────────

class Metrics:
    def __init__(self):
        self.request_count   = defaultdict(int)   # route → count
        self.error_count     = defaultdict(int)    # route → count
        self.duration_totals = defaultdict(float)  # route → total ms
        self.duration_counts = defaultdict(int)    # route → sample count
        self.started_at      = time.time()

    def record(self, route: str, duration_ms: float, is_error: bool):
        self.request_count[route]    += 1
        self.duration_totals[route]  += duration_ms
        self.duration_counts[route]  += 1
        if is_error:
            self.error_count[route]  += 1

    def summary(self):
        routes = {}
        for route in self.request_count:
            count = self.duration_counts[route]
            routes[route] = {
                "requests": self.request_count[route],
                "errors":   self.error_count[route],
                "avg_ms":   round(self.duration_totals[route] / count, 2) if count else 0,
            }
        return {
            "uptime_seconds": round(time.time() - self.started_at, 1),
            "routes": routes,
        }

metrics = Metrics()

# ── App ───────────────────────────────────────────────────────────────────────

app = FastAPI(title="Risk Training Hub KB", version="1.0.0")

KB_PATH = os.path.join(os.path.dirname(__file__), "kb_data.json")
with open(KB_PATH, "r") as f:
    KB: list[dict] = json.load(f)

logger.info("RTH started", extra={"extra": {"kb_entries": len(KB)}})

# ── Observability middleware ───────────────────────────────────────────────────

@app.middleware("http")
async def observability(request: Request, call_next):
    start      = time.perf_counter()
    route      = request.url.path
    method     = request.method
    query      = str(request.url.query) or None
    is_error   = False
    status     = 500

    try:
        response = await call_next(request)
        status   = response.status_code
        is_error = status >= 500
        return response

    except Exception as exc:
        is_error = True
        logger.error(
            f"Unhandled exception on {method} {route}",
            exc_info=exc,
            extra={"extra": {"route": route, "method": method, "query": query}},
        )
        return JSONResponse(status_code=500, content={"error": "internal server error"})

    finally:
        duration_ms = round((time.perf_counter() - start) * 1000, 2)
        metrics.record(route, duration_ms, is_error)

        level = logging.ERROR if is_error else logging.INFO
        logger.log(level, f"{method} {route} {status} {duration_ms}ms", extra={"extra": {
            "route":       route,
            "method":      method,
            "status":      status,
            "duration_ms": duration_ms,
            "query":       query,
        }})

# ── Routes ────────────────────────────────────────────────────────────────────

@app.get("/api/kb")
def search_kb(q: str = Query(default="", description="Search query")):
    if not q.strip():
        return {"results": KB, "total": len(KB)}
    try:
        pattern = re.compile(re.escape(q), re.IGNORECASE)
    except re.error as e:
        logger.warning("Invalid regex in query", extra={"extra": {"query": q, "error": str(e)}})
        return {"results": [], "total": 0, "query": q, "error": "invalid query"}
    hits = [e for e in KB if pattern.search(e.get("title", ""))
            or pattern.search(e.get("body", ""))
            or any(pattern.search(t) for t in e.get("tags", []))]
    return {"results": hits, "total": len(hits), "query": q}

@app.get("/api/kb/{entry_id}")
def get_kb_entry(entry_id: str):
    for e in KB:
        if e.get("id") == entry_id:
            return e
    return {"error": "not found"}

@app.get("/health")
def health():
    return {"status": "ok", "kb_entries": len(KB)}

@app.get("/metrics")
def get_metrics():
    return metrics.summary()

# Static frontend — AFTER API routes
app.mount("/", StaticFiles(directory=".", html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8080))
    uvicorn.run(app, host="0.0.0.0", port=port, log_level="warning")  # warning: rth logger handles request logs
