import os
import fitz

PDF = r"d:\Downloads\AECC Profile-2026.pdf"
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "aecc", "clients")
os.makedirs(OUT, exist_ok=True)

doc = fitz.open(PDF)
page = doc[16]  # page 17
for i, img in enumerate(page.get_images(full=True)):
    base = doc.extract_image(img[0])
    if base["width"] < 100:
        continue
    ext = base["ext"]
    path = os.path.join(OUT, f"client-{i + 1:02d}.{ext}")
    with open(path, "wb") as f:
        f.write(base["image"])
    print(path, base["width"], base["height"])
