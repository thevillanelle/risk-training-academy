# ── Build stage ───────────────────────────────────────────────────
FROM python:3.11-slim AS builder
WORKDIR /build
COPY requirements.txt .
RUN pip install --upgrade pip &&     pip install --no-cache-dir --prefix=/install -r requirements.txt

# ── Runtime stage ─────────────────────────────────────────────────
FROM python:3.11-slim
LABEL org.opencontainers.image.title="Risk Training Hub"
LABEL org.opencontainers.image.description="Risk Intelligence Investigations — KB, Decision Matrix, Training Game"

# Non-root user required by GitHub Pages
RUN useradd -m -u 1000 rth
WORKDIR /app

COPY --from=builder /install /usr/local
COPY --chown=rth:rth server.py kb_data.json kb-data.js .
COPY --chown=rth:rth index.html guide.html geography-game.html .
COPY --chown=rth:rth KB_*.md README.md .

USER rth
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3   CMD python3 -c "import urllib.request; urllib.request.urlopen('http://localhost:8080/health')" || exit 1

CMD ["python3", "server.py"]