#!/usr/bin/env python3
"""Turn a real photo into a 16-bit style portrait for the Career Quest avatar.

The site's aesthetic is pixel art, but every character portrait Stitch generated
was an invented persona. This converts an actual photo instead: downsample to a
small grid, grade the shadows toward the project's deep navy and the highlights
toward warm gold, then reduce to a small palette. The Avatar component upscales
it with `image-rendering: pixelated`, so a ~96px source is exactly right.

    python3 scripts/pixelize-avatar.py photo.jpg
    python3 scripts/pixelize-avatar.py photo.jpg --focus 0.5,0.3 --size 128

Options
    --out       where to write (default public/assets/stitch/avatar.png)
    --size      output edge in pixels (default 96) — bigger = less blocky
    --focus     X,Y of the face in the source, 0–1 (default 0.5,0.38)
    --colors    palette size after quantisation (default 28)
    --tint      how far to grade toward the theme, 0–1 (default 0.38)
    --vignette  darken the corners so the face reads at small sizes
"""

import argparse
from pathlib import Path

from PIL import Image, ImageEnhance, ImageOps

# Matches --cq-surface-lowest and a warm highlight from the gold ramp.
SHADOW = (4, 14, 31)
HIGHLIGHT = (255, 233, 168)


def square_crop(image: Image.Image, fx: float, fy: float) -> Image.Image:
    """Crop to a square around the focus point, clamped inside the frame."""
    w, h = image.size
    edge = min(w, h)
    left = min(max(int(w * fx - edge / 2), 0), w - edge)
    top = min(max(int(h * fy - edge / 2), 0), h - edge)
    return image.crop((left, top, left + edge, top + edge))


def grade(image: Image.Image, tint: float) -> Image.Image:
    """Pull shadows toward navy and highlights toward warm gold.

    Mid-tones are left alone so skin keeps its own colour — a flat duotone
    over a face reads as a filter, not as pixel art.
    """
    out = image.copy()
    pixels = out.load()
    w, h = out.size

    for y in range(h):
        for x in range(w):
            r, g, b = pixels[x, y][:3]
            lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255

            if lum < 0.5:
                target, weight = SHADOW, tint * (1 - lum * 2)
            else:
                # Highlights take a lighter touch, or faces go waxy.
                target, weight = HIGHLIGHT, tint * (lum - 0.5) * 2 * 0.55

            pixels[x, y] = tuple(
                int(channel * (1 - weight) + target[i] * weight)
                for i, channel in enumerate((r, g, b))
            )
    return out


def vignette(image: Image.Image, strength: float = 0.45) -> Image.Image:
    """Radial darkening toward the corners."""
    out = image.copy()
    pixels = out.load()
    w, h = out.size
    cx, cy = w / 2, h / 2
    radius = (cx**2 + cy**2) ** 0.5

    for y in range(h):
        for x in range(w):
            distance = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5 / radius
            weight = max(0.0, (distance - 0.55) / 0.45) ** 2 * strength
            r, g, b = pixels[x, y][:3]
            pixels[x, y] = tuple(
                int(channel * (1 - weight) + SHADOW[i] * weight)
                for i, channel in enumerate((r, g, b))
            )
    return out


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('source')
    parser.add_argument('--out', default='public/assets/stitch/avatar.png')
    parser.add_argument('--size', type=int, default=96)
    parser.add_argument('--focus', default='0.5,0.38')
    parser.add_argument('--colors', type=int, default=28)
    parser.add_argument('--tint', type=float, default=0.38)
    parser.add_argument('--vignette', action='store_true')
    args = parser.parse_args()

    fx, fy = (float(value) for value in args.focus.split(','))

    # exif_transpose honours the camera's rotation flag.
    image = ImageOps.exif_transpose(Image.open(args.source)).convert('RGB')
    image = square_crop(image, fx, fy)
    image = image.resize((args.size, args.size), Image.LANCZOS)

    # Small images lose punch; push contrast and saturation before quantising.
    image = ImageEnhance.Contrast(image).enhance(1.18)
    image = ImageEnhance.Color(image).enhance(1.12)

    image = grade(image, args.tint)
    if args.vignette:
        image = vignette(image)

    # Adaptive palette: a limited set of colours is what reads as pixel art.
    image = image.quantize(colors=args.colors, method=Image.MEDIANCUT).convert('RGB')

    out_path = Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    image.save(out_path, 'PNG', optimize=True)
    print(f'{out_path}  {args.size}x{args.size}  {args.colors} colours  {out_path.stat().st_size} bytes')


if __name__ == '__main__':
    main()
