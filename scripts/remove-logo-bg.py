"""Remove solid backgrounds from client logos; save transparent PNGs."""
from __future__ import annotations

import shutil
from collections import deque
from pathlib import Path

from PIL import Image

SOURCE = Path(__file__).parent.parent / "clients_logos"
OUT = Path(__file__).parent.parent / "public" / "aecc" / "clients"

MAPPING = {
    "se-logo.png": "1be1c7bd09f5a.jpg",
    "ng-logo.png": "E1r0N3wXMAIR06U.png",
    "pdc-logo.png": "1704878249522.jpg",
    "aramco-logo.png": "Saudi_Aramco.jpg",
    "maaden-logo.png": "1184811.jpeg.webp",
    "masco-logo.png": "005.jpg",
    "neom.png": "neom.png",
    "rcjy-logo.png": "rcjy_gov-logo-en.png",
    "swa-logo.png": "swa-logo-en.png",
}

TOLERANCE = 42


def background_color(img: Image.Image) -> tuple[int, int, int]:
    rgb = img.convert("RGB")
    px = rgb.load()
    w, h = rgb.size
    samples: list[tuple[int, int, int]] = []
    for x in range(w):
        samples.append(px[x, 0])
        samples.append(px[x, h - 1])
    for y in range(h):
        samples.append(px[0, y])
        samples.append(px[w - 1, y])
    r = sum(c[0] for c in samples) // len(samples)
    g = sum(c[1] for c in samples) // len(samples)
    b = sum(c[2] for c in samples) // len(samples)
    return r, g, b


def matches_bg(color: tuple[int, int, int], bg: tuple[int, int, int]) -> bool:
    return all(abs(c - b) <= TOLERANCE for c, b in zip(color, bg))


def remove_background(img: Image.Image) -> Image.Image:
    rgba = img.convert("RGBA")
    px = rgba.load()
    w, h = rgba.size
    bg = background_color(img)

    visited: set[tuple[int, int]] = set()
    queue: deque[tuple[int, int]] = deque()

    for x in range(w):
        for y in (0, h - 1):
            if matches_bg(px[x, y][:3], bg):
                queue.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if matches_bg(px[x, y][:3], bg):
                queue.append((x, y))

    while queue:
        x, y = queue.popleft()
        if (x, y) in visited:
            continue
        if not (0 <= x < w and 0 <= y < h):
            continue
        if not matches_bg(px[x, y][:3], bg):
            continue
        visited.add((x, y))
        px[x, y] = (px[x, y][0], px[x, y][1], px[x, y][2], 0)
        queue.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])

    return rgba


def main() -> None:
    if not SOURCE.is_dir():
        raise FileNotFoundError(SOURCE)

    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)

    for dest_name, src_name in MAPPING.items():
        src = SOURCE / src_name
        if not src.exists():
            raise FileNotFoundError(src)

        img = Image.open(src)
        if dest_name == "neom.png" and img.mode in ("RGBA", "LA"):
            out = img.convert("RGBA")
        else:
            out = remove_background(img)

        dest = OUT / dest_name
        out.save(dest, "PNG", optimize=True)
        print(f"{dest_name} <- {src_name}")


if __name__ == "__main__":
    main()
