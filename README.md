# michaelrobertsutton.com

Single-page editorial portfolio for Michael Sutton, implemented with vanilla HTML, CSS, and JavaScript.

## Quickstart

1. Start a local static server from repo root:

```bash
python3 -m http.server 8000
```

2. Open `http://localhost:8000`.

No build step is required.

## File map

- `index.html`: page structure, content, metadata, JSON-LD Person schema.
- `assets/css/styles.css`: editorial design system, layout, typography, and responsive behavior.
- `assets/js/script.js`: navigation state, active-section highlighting, and back-to-top behavior.
- `documents/Sutton_Michael_Resume.pdf`: source resume used for proof blocks.
- `documents/artifacts/*.md`: sanitized public artifacts linked from Work.
- `sitemap.xml`: static sitemap.
- `robots.txt`: crawler policy and sitemap reference.

## Edit workflow

1. Update copy and section structure in `index.html`.
2. Update visual system and spacing in `assets/css/styles.css`.
3. Update interaction behavior in `assets/js/script.js`.
4. Reload browser and verify keyboard navigation, focus states, and anchor links.

## Deployment notes

This is a static site and can be deployed to any static host (GitHub Pages, Netlify, Vercel static output, S3 + CloudFront, etc.).

Minimum requirements:

- Serve `index.html` at `/`.
- Serve `/documents/Sutton_Michael_Resume.pdf`.
- Serve `/sitemap.xml` and `/robots.txt`.
