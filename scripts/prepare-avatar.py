#!/usr/bin/env python3
"""Prepare an already-pixel-art portrait for the Career Quest avatar slot.

The source art sits on a warm tan background, which reads as a bright blob
against the site's deep navy. This swaps that background for the project
surface colour, crops to head-and-shoulders, and writes a retina-sized PNG.

Why a gradient-following flood fill rather than a colour match: the blazer and
the background are only ~12 apart in RGB, so any fixed tolerance keyed to the
background colour eats the jacket. Spreading only where each step stays close
to its *neighbour* follows the soft halo around the figure instead, and stops
dead at the dark contour line the art already has.

    python3 scripts/prepare-avatar.py ~/Downloads/foto-pixel-gpt.png
"""

import argparse
from collections import deque
from pathlib import Path

from PIL import Image

# --cq-surface-low: the sidebar sits on --cq-surface-lowest, so this reads as a
# panel rather than a hole.
BACKGROUND = (17, 28, 45)


def saturation(colour):
    return (max(colour) - min(colour)) / max(1, max(colour))


def luminance(colour):
    return (0.2126 * colour[0] + 0.7152 * colour[1] + 0.0722 * colour[2]) / 255


def replace_background(image, local_tol, sat_max, lum_min, protect):
    """Flood from the border, spreading only between similar neighbours.

    `protect` is an (cx, cy, rx, ry) ellipse in 0–1 units that the fill may not
    enter — it guards the shirt, which is bright and desaturated enough to look
    like background once the fill reaches the collar.
    """
    w, h = image.size
    pixels = image.load()
    cx, cy, rx, ry = protect
    cx, cy, rx, ry = cx * w, cy * h, rx * w, ry * h

    seen = bytearray(w * h)
    queue = deque()
    for x in range(0, w, 2):
        queue.extend(((x, 0), (x, h - 1)))
    for y in range(0, h, 2):
        queue.extend(((0, y), (w - 1, y)))

    filled = []
    while queue:
        x, y = queue.popleft()
        index = y * w + x
        if seen[index]:
            continue
        if rx and ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1:
            continue

        colour = pixels[x, y]
        if saturation(colour) > sat_max or luminance(colour) < lum_min:
            continue

        seen[index] = 1
        filled.append((x, y))

        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h and not seen[ny * w + nx]:
                neighbour = pixels[nx, ny]
                if max(abs(a - b) for a, b in zip(neighbour, colour)) <= local_tol:
                    queue.append((nx, ny))

    for x, y in filled:
        pixels[x, y] = BACKGROUND
    return len(filled) / (w * h)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('source')
    parser.add_argument('--out', default='public/assets/stitch/avatar.png')
    parser.add_argument('--size', type=int, default=192,
                        help='output edge; 192 is 1:1 device pixels at 96 CSS px on retina')
    parser.add_argument('--crop', default='0.47,0.40,0.80',
                        help='centre-x,centre-y,edge as fractions of the source')
    parser.add_argument('--local-tol', type=int, default=14)
    parser.add_argument('--sat-max', type=float, default=0.34)
    parser.add_argument('--lum-min', type=float, default=0.34)
    parser.add_argument('--protect', default='0.5,0.92,0.30,0.22',
                        help='cx,cy,rx,ry ellipse the fill may not enter')
    parser.add_argument('--keep-background', action='store_true')
    args = parser.parse_args()

    image = Image.open(args.source).convert('RGB')
    w, h = image.size

    cx, cy, edge = (float(v) for v in args.crop.split(','))
    side = int(min(w, h) * edge)
    left = min(max(int(w * cx - side / 2), 0), w - side)
    top = min(max(int(h * cy - side / 2), 0), h - side)
    image = image.crop((left, top, left + side, top + side))

    if not args.keep_background:
        protect = tuple(float(v) for v in args.protect.split(','))
        share = replace_background(image, args.local_tol, args.sat_max, args.lum_min, protect)
        print(f'background replaced: {share * 100:.1f}% of the crop')

    # BOX averages whole blocks, which keeps the source's pixel grid honest
    # instead of smearing it the way a smooth filter would.
    image = image.resize((args.size, args.size), Image.BOX)

    out_path = Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    image.save(out_path, 'PNG', optimize=True)
    print(f'{out_path}  {args.size}x{args.size}  {out_path.stat().st_size} bytes')


if __name__ == '__main__':
    main()
