"""Process client logos: copy from clients_logos and remove backgrounds."""
from __future__ import annotations

import runpy
from pathlib import Path

SCRIPT = Path(__file__).parent / "remove-logo-bg.py"


def main() -> None:
    runpy.run_path(str(SCRIPT), run_name="__main__")


if __name__ == "__main__":
    main()
