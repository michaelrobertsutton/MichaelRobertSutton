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
- `styles.css`: editorial design system, layout, typography, responsive behavior.
- `script.js`: navigation state, mobile menu, contact form draft-email behavior.
- `documents/Sutton_Michael_Resume.pdf`: source resume used for proof blocks.
- `sitemap.xml`: static sitemap.
- `robots.txt`: crawler policy and sitemap reference.

## Edit workflow

1. Update copy and section structure in `index.html`.
2. Update visual system and spacing in `styles.css`.
3. Update interaction behavior in `script.js`.
4. Reload browser and verify keyboard navigation, focus states, and anchor links.

## Claim sourcing rules (hard constraints)

- Do not invent clients, metrics, or achievements.
- Every proof claim must exist in either:
  - `documents/Sutton_Michael_Resume.pdf`, or
  - existing public site text.
- If a claim cannot be verified, omit it from published content.
- If a section needs missing detail to be complete, use `{PLACEHOLDER: ...}` text in the page and track it for follow-up.

## Current proof-source map

- `18+ years delivering federal healthcare technology`: Resume summary.
- `15 years supporting CMS and Medicare modernization`: Resume summary.
- `$500M+ in competitive captures`: Resume summary.
- `Award-winning Beneficiary Claims Data API and first federal Bulk FHIR`: Resume work history and highlights.
- `$135M+ in wins; win rate improved 20% to 33%`: Resume Bellese Technologies role.
- `"Excellent" CPARS ratings`: Resume highlights.

## Deployment notes

This is a static site and can be deployed to any static host (GitHub Pages, Netlify, Vercel static output, S3 + CloudFront, etc.).

Minimum requirements:

- Serve `index.html` at `/`.
- Serve `/documents/Sutton_Michael_Resume.pdf`.
- Serve `/sitemap.xml` and `/robots.txt`.
