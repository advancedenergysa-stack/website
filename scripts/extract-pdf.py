import os
import fitz

PDF = r"d:\Downloads\AECC Profile-2026.pdf"
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "aecc")
os.makedirs(OUT, exist_ok=True)

doc = fitz.open(PDF)
for i in range(doc.page_count):
    doc[i].get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False).save(
        os.path.join(OUT, f"page-{i + 1:02d}.png")
    )

n = 0
for pn in range(doc.page_count):
    for ii, img in enumerate(doc[pn].get_images(full=True)):
        base = doc.extract_image(img[0])
        if base["width"] < 100 or base["height"] < 100:
            continue
        n += 1
        ext = base["ext"]
        path = os.path.join(OUT, f"asset-p{pn + 1:02d}-{ii + 1:02d}.{ext}")
        with open(path, "wb") as f:
            f.write(base["image"])

print(f"pages={doc.page_count} assets={n}")
