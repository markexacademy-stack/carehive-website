# -*- coding: utf-8 -*-
"""Remove only the white backdrop from the CareHive logo. Keep the mark intact."""
from collections import deque
from PIL import Image

SRC = r"public/images/carehive-logo.png"
OUT = r"public/images/carehive-logo-clear.png"


def near_white(r, g, b, a, thresh):
    return a < 8 or (r >= thresh and g >= thresh and b >= thresh)


def flood_exterior(im, thresh):
    px = im.load()
    w, h = im.size
    visited = [[False] * w for _ in range(h)]
    q = deque()
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
        if not near_white(r, g, b, a, thresh):
            continue
        px[x, y] = (r, g, b, 0)
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
                q.append((nx, ny))
    return visited


def clear_enclosed_white(im, visited, thresh):
    """Clear white trapped in letter counters and the heart, keep roof window panes."""
    px = im.load()
    w, h = im.size
    seen = [[False] * w for _ in range(h)]
    for y in range(h):
        for x in range(w):
            if seen[y][x] or visited[y][x]:
                continue
            r, g, b, a = px[x, y]
            if a == 0 or not near_white(r, g, b, a, thresh):
                continue
            q = deque([(x, y)])
            seen[y][x] = True
            pts = []
            while q:
                cx, cy = q.popleft()
                pts.append((cx, cy))
                for nx, ny in ((cx + 1, cy), (cx - 1, cy), (cx, cy + 1), (cx, cy - 1)):
                    if 0 <= nx < w and 0 <= ny < h and not seen[ny][nx] and not visited[ny][nx]:
                        rr, gg, bb, aa = px[nx, ny]
                        if aa and near_white(rr, gg, bb, aa, thresh):
                            seen[ny][nx] = True
                            q.append((nx, ny))
            cy = sum(p[1] for p in pts) / len(pts)
            # Small white shapes high in the roof are the window panes.
            if cy < h * 0.24 and len(pts) < 2500:
                continue
            for cx, cy_ in pts:
                pr, pg, pb, _ = px[cx, cy_]
                px[cx, cy_] = (pr, pg, pb, 0)


def clear_white_fringe(im):
    """Drop only the pale halo left from the old white matte. Leave real color alone."""
    px = im.load()
    w, h = im.size
    targets = []
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0 or min(r, g, b) < 214:
                continue
            touches = False
            for ny in range(max(0, y - 1), min(h, y + 2)):
                for nx in range(max(0, x - 1), min(w, x + 2)):
                    if px[nx, ny][3] == 0:
                        touches = True
                        break
                if touches:
                    break
            if touches:
                targets.append((x, y))
    for x, y in targets:
        r, g, b, _ = px[x, y]
        px[x, y] = (r, g, b, 0)


def trim(im, pad=10):
    box = im.getbbox()
    if not box:
        return im
    l, t, r, b = box
    l = max(0, l - pad)
    t = max(0, t - pad)
    r = min(im.width, r + pad)
    b = min(im.height, b + pad)
    return im.crop((l, t, r, b))


def main():
    im = Image.open(SRC).convert("RGBA")
    visited = flood_exterior(im, 250)
    clear_enclosed_white(im, visited, 246)
    for _ in range(8):
        clear_white_fringe(im)
    out = trim(im)
    out.save(OUT, "PNG")
    print("saved", out.size)


if __name__ == "__main__":
    main()
