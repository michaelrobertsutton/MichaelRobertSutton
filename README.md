# Michael Sutton

Solutions Architect and AI practitioner with 18+ years building federal healthcare technology at scale.

Program lead for [Blue Button 2.0](https://bluebutton.cms.gov), the first federal Bulk FHIR API, now serving 53M+ Medicare beneficiaries. Currently at [@Bellese](https://github.com/Bellese), leading technical solution development for CMS programs and building AI systems in compliance-sensitive federal environments. Technical architecture lead on $174M+ in awarded contracts.

## What I build

**[Lenny](https://github.com/Bellese/Lenny)**  
Open-source FHIR Measure Calculation Tool for eCQM orchestration. Solo full-stack build: FastAPI orchestrator, React UI, PostgreSQL job tracking, OIDC-federated AWS deploy with zero long-lived keys, 600+ integration tests running nightly. Zero production incidents at the CMS Connectathon.

**AI governance and tooling**  
Agentic orchestration frameworks, RAG pipelines, and AI governance policy encoded as machine-readable rules, deployed across active federal delivery programs. Ran a 20-person Claude pilot to CEO-level readouts; built reusable AI workflow tooling adopted across delivery teams.

**Federal FHIR integrations**  
EHR-integrated Medicare provider enrollment prototype (React + OAuth 2.0 + SMART on FHIR). Direct PECOS submission from within EHR workflows, reducing enrollment time from hours to minutes.

## Tech

Python · FastAPI · React · AWS · FHIR · HL7 · SMART on FHIR · Claude API · LLMs · RAG · Docker · PostgreSQL · GitHub Actions

## Recognition

FedHealthIT Innovation Award — Beneficiary Claims Data API (Blue Button 2.0), CMS, 2019

---

Washington, DC · [michaelrobertsutton.com](https://michaelrobertsutton.com)

---

## michaelrobertsutton.com

Single-page editorial portfolio for Michael Sutton — built with vanilla HTML, CSS, and JavaScript. No frameworks, no build step.

### Getting Started

These instructions will get the site running locally for development.

#### Prerequisites

- Python 3 (for local dev server)
- AWS CLI with a `personal` profile configured (for deployment only)
- `CLOUDFRONT_DISTRIBUTION_ID` set in your shell environment (for deployment only)

#### Local Development

Start a static server from the repo root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

### File Map

```
index.html                           Page structure, content, metadata, JSON-LD schema
assets/css/styles.css                Design system, layout, typography, responsive behavior
assets/js/script.js                  Navigation state, active-section highlighting, back-to-top
documents/Sutton_Michael_Resume.pdf  Source resume used for proof blocks
documents/artifacts/*.md             Sanitized public artifacts linked from Work section
sitemap.xml                          Static sitemap
robots.txt                           Crawler policy
```

### Edit Workflow

1. Update copy and section structure in `index.html`.
2. Update visual system and spacing in `assets/css/styles.css`.
3. Update interaction behavior in `assets/js/script.js`.
4. Reload browser and verify keyboard navigation, focus states, and anchor links.

### Deployment

The site deploys to S3 + CloudFront via `deploy.sh`.

#### Prerequisites

Add your CloudFront distribution ID to your shell environment (one-time setup):

```bash
echo 'export CLOUDFRONT_DISTRIBUTION_ID="your-distribution-id"' >> ~/.zshrc
source ~/.zshrc
```

#### Deploy

```bash
./deploy.sh
```

Syncs all site files to S3 and invalidates the CloudFront cache. Requires the AWS CLI `personal` profile to be configured with appropriate permissions.

### Built With

- Vanilla HTML, CSS, JavaScript
- AWS S3 + CloudFront
