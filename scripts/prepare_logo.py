# -*- coding: utf-8 -*-
"""Extract a complete CareHive emblem (roof + full heart) with clean transparency."""
from PIL import Image
from collections import deque
import os

SRC = r"C:\Users\akhil\.cursor\projects\d-CAREHIVE\assets\c__Users_akhil_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-67d71de2-2da4-428a-809f-7ce5ee15582c.png"
OUT_MARK = r"D:\CAREHIVE\public\images\carehive-mark.png"
OUT_FULL = r"D:\CAREHIVE\public\images\carehive-logo.png"
OUT_PUBLIC = r"D:\CAREHIVE\public\logo.png"


def flood_transparent(im: Image.Image, thresh: int = 248) -> Image.Image:
    out = im.convert("RGBA").copy()
    px = out.load()
    w, h = out.size
    visited = [[False] * w for _ in range(h)]
    q = deque()

    def is_bg(r, g, b, a):
        # Only near-pure white / already transparent
        return a < 8 or (r >= thresh and g >= thresh and b >= thresh)

    for x in range(w):
        q.append((x, 0))
        q.append((x, h - 1))
    for y in range(h):
        q.append((0, y))
        q.append((w - 1, y))

    while q:
        x, y = q.popleft()
        if x < 0 or y < 0 or x >= w or y >= h or visited[y][x]:
            continue
        visited[y][x] = True
        r, g, b, a = px[x, y]
        if not is_bg(r, g, b, a):
            continue
        px[x, y] = (255, 255, 255, 0)
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
                q.append((nx, ny))
    return out


def trim(im: Image.Image, pad: int = 4) -> Image.Image:
    bbox = im.getbbox()
    if not bbox:
        return im
    l, t, r, b = bbox
    l = max(0, l - pad)
    t = max(0, t - pad)
    r = min(im.width, r + pad)
    b = min(im.height, b + pad)
    return im.crop((l, t, r, b))


def main():
    if not os.path.exists(SRC):
        # fallback to current public logo if source missing
        src = Image.open(OUT_FULL).convert("RGBA")
        # If already processed, put on white first for flood fill
        bg = Image.new("RGBA", src.size, (255, 255, 255, 255))
        bg.paste(src, (0, 0), src)
        full = bg
    else:
        full = Image.open(SRC).convert("RGBA")

    w, h = full.size
    print("source", w, h)

    # Full logo transparent
    full_t = trim(flood_transparent(full, 248))
    full_t.save(OUT_FULL, "PNG")
    full_t.save(OUT_PUBLIC, "PNG")
    print("full", full_t.size)

    # Emblem: include full roof through full heart bottom.
    # Original vertical logo: emblem is roughly top 0–48% of height.
    # Use slightly MORE height so heart tip is never cut.
    top = 0
    bottom = int(h * 0.50)
    left = int(w * 0.06)
    right = int(w * 0.94)
    emblem = full.crop((left, top, right, bottom))
    emblem = trim(flood_transparent(emblem, 248), pad=6)

    # Retina 2x
    mark = emblem.resize(
        (emblem.width * 2, emblem.height * 2), Image.Resampling.LANCZOS
    )
    mark.save(OUT_MARK, "PNG")
    print("mark", mark.size)

    # Also copy as favicon source
    mark.save(r"D:\CAREHIVE\src\app\icon.png", "PNG")


if __name__ == "__main__":
    main()
