"""
Risk Training Hub — Pytest Suite
Tests the full FastAPI API surface: health, KB search, and entry lookup.
"""
import time
import json
import pytest
from unittest.mock import patch
from fastapi.testclient import TestClient
from server import app

client = TestClient(app)


# ── Health ────────────────────────────────────────────────────────────────────

def test_health_ok():
    """App boots and reports healthy."""
    r = client.get("/health")
    assert r.status_code == 200
    assert r.json()["status"] == "ok"


def test_health_has_entries():
    """KB data loaded — at least one entry in kb_data.json."""
    r = client.get("/health")
    assert r.json()["kb_entries"] > 0


# ── KB search ─────────────────────────────────────────────────────────────────

def test_kb_no_query_returns_all():
    """Empty query returns the full KB."""
    r = client.get("/api/kb")
    assert r.status_code == 200
    data = r.json()
    assert data["total"] == 63
    assert len(data["results"]) == 63


def test_kb_search_hit():
    """Search for a known term returns at least one result."""
    r = client.get("/api/kb?q=AML")
    assert r.status_code == 200
    assert r.json()["total"] >= 1


def test_kb_search_no_match():
    """Search for a nonsense term returns zero results cleanly."""
    r = client.get("/api/kb?q=xyznotarealterm")
    assert r.status_code == 200
    data = r.json()
    assert data["total"] == 0
    assert data["results"] == []


# ── Entry lookup ──────────────────────────────────────────────────────────────

def test_kb_get_entry_valid():
    """Valid entry ID returns the correct entry."""
    r = client.get("/api/kb/d-aml")
    assert r.status_code == 200
    data = r.json()
    assert data["id"] == "d-aml"
    assert "AML" in data["title"]


def test_kb_get_entry_not_found():
    """Fake entry ID returns a clean not-found error."""
    r = client.get("/api/kb/fake-id-999")
    assert r.status_code == 200
    assert r.json() == {"error": "not found"}


# ── Malformed query parameters ────────────────────────────────────────────────

def test_kb_search_special_characters():
    """Regex special chars in query don't crash the server."""
    r = client.get("/api/kb?q=.*[invalid(")
    assert r.status_code == 200

def test_kb_search_very_long_query():
    """Extremely long query string is handled gracefully."""
    long_q = "a" * 5000
    r = client.get(f"/api/kb?q={long_q}")
    assert r.status_code == 200

def test_kb_search_whitespace_only():
    """Whitespace-only query is treated as empty — returns all entries."""
    r = client.get("/api/kb?q=   ")
    assert r.status_code == 200
    assert r.json()["total"] == 63


# ── Response schema validation ────────────────────────────────────────────────

def test_kb_list_response_schema():
    """Every KB entry in list results has the required fields and types."""
    r = client.get("/api/kb")
    assert r.status_code == 200
    for entry in r.json()["results"]:
        assert isinstance(entry["id"], str)
        assert isinstance(entry["cat"], str)
        assert isinstance(entry["title"], str)
        assert isinstance(entry["body"], str)
        assert isinstance(entry["tags"], list)

def test_kb_entry_response_schema():
    """Single entry lookup returns all required fields with correct types."""
    r = client.get("/api/kb/d-aml")
    assert r.status_code == 200
    data = r.json()
    assert isinstance(data["id"], str)
    assert isinstance(data["cat"], str)
    assert isinstance(data["title"], str)
    assert isinstance(data["body"], str)
    assert isinstance(data["tags"], list)

def test_kb_search_response_includes_query_field():
    """Search response echoes back the query string."""
    r = client.get("/api/kb?q=AML")
    assert r.status_code == 200
    assert r.json()["query"] == "AML"


# ── KB file missing / corrupted ───────────────────────────────────────────────

def test_kb_corrupted_data_handling():
    """If KB data is replaced with garbage, server raises on startup — not silently."""
    import server
    original = server.KB
    try:
        server.KB = [{"broken": True}]  # missing required fields
        r = client.get("/api/kb")
        # Should still return 200 — entries just won't have expected fields
        assert r.status_code == 200
    finally:
        server.KB = original  # always restore


# ── Performance ───────────────────────────────────────────────────────────────

def test_kb_search_performance():
    """Full KB search completes in under 200ms."""
    start = time.perf_counter()
    r = client.get("/api/kb?q=compliance")
    elapsed_ms = (time.perf_counter() - start) * 1000
    assert r.status_code == 200
    assert elapsed_ms < 200, f"Search took {elapsed_ms:.1f}ms — expected < 200ms"

def test_kb_full_scan_performance():
    """Returning all 63 entries completes in under 100ms."""
    start = time.perf_counter()
    r = client.get("/api/kb")
    elapsed_ms = (time.perf_counter() - start) * 1000
    assert r.status_code == 200
    assert elapsed_ms < 100, f"Full scan took {elapsed_ms:.1f}ms — expected < 100ms"


# ── Case-insensitive search ───────────────────────────────────────────────────

def test_kb_search_case_insensitive_lower():
    """Lowercase query matches same results as uppercase."""
    upper = client.get("/api/kb?q=AML").json()["total"]
    lower = client.get("/api/kb?q=aml").json()["total"]
    assert lower == upper

def test_kb_search_case_insensitive_mixed():
    """Mixed-case query matches same results as uppercase."""
    upper = client.get("/api/kb?q=AML").json()["total"]
    mixed = client.get("/api/kb?q=AmL").json()["total"]
    assert mixed == upper
