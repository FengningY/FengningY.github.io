# fengningy.github.io

Personal academic website for **Fengning Yang** — perovskite photovoltaics,
device stability, and operando characterisation.

Plain HTML, CSS and a little JavaScript. No build step, no dependencies, no
tracking. Hosted for free on GitHub Pages.

## Files

```
.
├── index.html          # all content
├── styles.css          # design and layout
├── script.js           # theme toggle, scroll reveal, footer year
├── 404.html            # custom not-found page
├── portrait.jpg        # headshot (4:5 crop); replace with a recent photo
├── assets/
│   └── favicon.svg     # browser tab icon
├── .nojekyll           # tells GitHub Pages to serve files as-is
└── README.md
```

## Deploy

1. Create the repository **`FengningY/FengningY.github.io`** (public).
2. Upload every file to the repository root: **Add file → Upload files**.
3. **Settings → Pages** → *Deploy from a branch* → branch **`main`**,
   folder **`/ (root)`** → **Save**.
4. The site goes live at <https://fengningy.github.io> within a minute or two.

Every push to `main` redeploys automatically.

## Updating content

- **Publications**: edit the `<ol class="pubs">` block in `index.html`. Each
  entry is a `<li class="pub">` with year, title, author line and DOI link.
- **Recognition**: same structure, in the `#recognition` section.
- **Citation count / h-index**: the `.stats` line above the publication list.
- **Photo**: replace `portrait.jpg` with a recent headshot (it is cropped to a
  4:5 frame). Delete the file to fall back to the initials.
- **Favicon**: `assets/favicon.svg` — change the `FY` text or the `fill`.

## Notes

- The CV is **not** published here. The PDF contains a phone number; redact it
  before uploading a public copy, then link it from the hero or contact
  section.
- Free GitHub Pages sites must come from a public repository.
- `.nojekyll` is empty on purpose — it stops GitHub from running Jekyll.
- The page is responsive, keyboard accessible, respects
  `prefers-reduced-motion`, and ships a print stylesheet.

## Local preview

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```
