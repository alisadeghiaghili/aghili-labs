"""Live smoke check for the shared visitor counter hosted on Abacus.

By default the check is read-only: it calls ``get`` twice and verifies that
each response is JSON of the form ``{"value": <int>}`` and that the two reads
agree (``get`` must not change the counter).

Run on a machine that can reach abacus.jasoncameron.dev:

    python tools/test_counter.py

Pass ``--hit`` to also send one real ``hit``. That legitimately adds 1 to the
live public counter, so it is opt-in:

    python tools/test_counter.py --hit

The namespace and key are read from ``VISITOR_COUNTER`` in ``app.js`` so the
check always targets the counter the site uses. A ``get`` that answers 404
means the key does not exist yet and is reported as 0, like the page does.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

APP_JS = Path(__file__).resolve().parent.parent.joinpath("app.js")


def _config_value(source: str, name: str) -> str:
    """Read a string property of ``VISITOR_COUNTER`` from ``app.js``.

    Args:
        source: Full text of ``app.js``.
        name: Property name, e.g. ``"namespace"``.

    Returns:
        The string value assigned to that property.

    Raises:
        SystemExit: If the property cannot be found.
    """
    match = re.search(rf'{name}:\s*"([^"]+)"', source)
    if match is None:
        raise SystemExit(f"STOP: could not find '{name}' in VISITOR_COUNTER ({APP_JS}).")
    return match.group(1)


def counter_url(action: str) -> str:
    """Build the Abacus URL for ``action`` using the settings in ``app.js``.

    Args:
        action: Either ``"get"`` (read-only) or ``"hit"`` (increments by one).

    Returns:
        The absolute endpoint URL.
    """
    source = APP_JS.read_text(encoding="utf-8")
    api = _config_value(source, "api")
    namespace = urllib.parse.quote(_config_value(source, "namespace"), safe="")
    key = urllib.parse.quote(_config_value(source, "key"), safe="")
    return f"{api}/{action}/{namespace}/{key}"


def fetch_value(action: str, timeout: float = 8.0) -> int | None:
    """Call one counter endpoint and return the counter value.

    Args:
        action: Either ``"get"`` or ``"hit"``.
        timeout: Request timeout in seconds.

    Returns:
        The integer ``value`` from the JSON response, ``0`` for a ``get`` on a
        key that does not exist yet (HTTP 404), or ``None`` on any network,
        HTTP or format problem (the reason is printed).
    """
    url = counter_url(action)
    request = urllib.request.Request(url, headers={"Accept": "application/json"})
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            payload = json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        if action == "get" and exc.code == 404:
            return 0
        print(f"  ({action} failed: HTTP {exc.code} from {url})")
        return None
    except (urllib.error.URLError, TimeoutError, ValueError) as exc:
        print(f"  ({action} failed: {exc})")
        return None

    value = payload.get("value") if isinstance(payload, dict) else None
    if isinstance(value, bool) or not isinstance(value, int) or value < 0:
        print(f"  ({action} returned an unexpected body: {payload!r})")
        return None
    return value


def main(argv: list[str] | None = None) -> int:
    """Run the smoke check.

    Args:
        argv: Command-line arguments; defaults to ``sys.argv[1:]``.

    Returns:
        Process exit code: ``0`` on success, ``1`` if any check fails.
    """
    parser = argparse.ArgumentParser(description=__doc__.split("\n", 1)[0])
    parser.add_argument(
        "--hit",
        action="store_true",
        help="also send one real hit and verify it adds exactly 1 (changes the live counter)",
    )
    args = parser.parse_args(argv)

    print(f"Counter: {counter_url('get')}")
    first = fetch_value("get")
    second = fetch_value("get")
    if first is None or second is None:
        print("STOP: could not read the counter. Nothing was incremented.")
        return 1

    print(f"1st read : {first}")
    print(f"2nd read : {second}")
    if first != second:
        print("FAIL: two consecutive reads differ; get should not change the value.")
        return 1
    print("PASS: get returns {value: int} and is stable.")

    if not args.hit:
        print("Skipped hit check (pass --hit to run it).")
        return 0

    print("Sending one hit (adds 1 to the live counter) ...")
    hit_value = fetch_value("hit")
    time.sleep(1.0)
    after = fetch_value("get")
    if hit_value is None or after is None:
        print("STOP: could not complete the hit check.")
        return 1

    print(f"hit reply: {hit_value}")
    print(f"after hit: {after}")
    if hit_value == first + 1 and after == first + 1:
        print("PASS: hit increased the counter by exactly 1.")
        return 0
    print("FAIL: counter did not move by exactly +1 (other visitors may have hit it meanwhile).")
    return 1


if __name__ == "__main__":
    sys.exit(main())
