---
title: 'convert cheatsheet'
description: 'A few useful commands for the imagemagick cli'
---

### Convert filetype

```bash
convert in.png out.jpg
```

### Resize

```bash
convert in.png -resize 100x100 out.png  # resize to exact size
convert in.png -resize 100x out.png     # resize proportionally
convert in.png -resize x100 out.png     # same thing
```

### Dim an image

```bash
convert in.png -fill black -colorize 50% out.png
```

### Blur image

```bash
convert in.png -blur 0x8 out.png
```
