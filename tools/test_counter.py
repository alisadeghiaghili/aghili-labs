"""Verify the shared page counter: a single /api/hit raises the count by 1,
and /api/get reads it back without changing it.

Run on a machine that can reach api.visitorbadge.io:

    python tools/test_counter.py

NOTE: this performs one real /api/hit, so it legitimately adds 1 to the live
shared counter. That is expected and is exactly what the test is checking.
"""

import json
import time
import urllib.request

PATH = "aghili-labs"
BASE = "https://api.visitorbadge.io/api"
GET_URL = f"{BASE}/get?path={PATH}"
HIT_URL = f"{BASE}/hit?path={PATH}"


def fetch(url, timeout=8):
    """Return the response body, or None on any network/HTTP problem."""
    try:
        req = urllib.request.Request(url, headers={"Accept": "application/json, text/plain, */*"})
        with urllib.request.urlopen(req, timeout=timeout) as res:
            if res.status != 200:
                return None
            return res.read().decode("utf-8").strip()
    except Exception as exc:  # network blocked, timeout, HTTP error, ...
        print(f"  (request to {url} failed: {exc})")
        return None


def parse_count(text):
    """Tolerate a bare number or JSON ({value} / {count} / {visitors})."""
    if text is None:
        return None
    if text.isdigit():
        return int(text)
    try:
        j = json.loads(text)
        val = j.get("value", j.get("count", j.get("visitors", j)))
        return int(val)
    except (ValueError, AttributeError, TypeError):
        return None


def main():
    print(f"Reading shared counter (path={PATH}) ...")
    before = parse_count(fetch(GET_URL))
    if before is None:
        print("STOP: could not read the counter via /api/get.")
        print("If you are on a restricted network (no route to api.visitorbadge.io),")
        print("run this from a machine that can reach it. Nothing was incremented.")
        return

    # Increment once (a genuine new visit).
    print(f"Sending one /api/hit (counts as a new visitor) ...")
    fetch(HIT_URL)
    time.sleep(1.5)  # let the increment settle

    after = parse_count(fetch(GET_URL))
    if after is None:
        print("STOP: could not read the counter back after /api/hit.")
        return

    # A second read must not change the number (proves /api/get is read-only).
    after2 = parse_count(fetch(GET_URL))

    print(f"before hit : {before}")
    print(f"after hit  : {after}")
    print(f"2nd read   : {after2}")

    if after == before + 1 and after2 == after:
        print("PASS: hit incremented by exactly 1, and get is read-only (stable).")
    else:
        print("CHECK: numbers did not behave as expected - inspect the values above.")


if __name__ == "__main__":
    main()
