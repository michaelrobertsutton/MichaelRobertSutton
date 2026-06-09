# Michael Sutton

Solutions Architect and AI practitioner with 18+ years building federal healthcare technology at scale.

Program lead for [Blue Button 2.0](https://bluebutton.cms.gov) — the first federal Bulk FHIR API, now serving 53M+ Medicare beneficiaries. Currently at [@Bellese](https://github.com/Bellese), leading technical solution development for CMS programs and building AI systems that run in compliance-sensitive federal environments. Technical architecture lead on $174M+ in awarded contracts.

## What I build

**[Lenny](https://github.com/Bellese/Lenny)** — Open-source FHIR Measure Calculation Tool for eCQM orchestration. Solo full-stack build: FastAPI orchestrator, React UI, PostgreSQL job tracking, OIDC-federated AWS deploy with zero long-lived keys, 600+ integration tests running nightly. Zero production incidents at the CMS Connectathon.

**AI governance and tooling** — Agentic orchestration frameworks, RAG pipelines, and AI governance policy encoded as machine-readable rules — deployed across active federal delivery programs. Ran a 20-person Claude pilot to CEO-level readouts; built reusable AI workflow tooling adopted across delivery teams.

**Federal FHIR integrations** — EHR-integrated Medicare provider enrollment prototype (React + OAuth 2.0 + SMART on FHIR). Direct PECOS submission from within EHR workflows, reducing enrollment time from hours to minutes.

## Tech

Python · FastAPI · React · AWS · FHIR · HL7 · SMART on FHIR · Claude API · LLMs · RAG · Docker · PostgreSQL · GitHub Actions

## Recognition

FedHealthIT Innovation Award — Beneficiary Claims Data API (Blue Button 2.0), CMS, 2019

---

Washington, DC · [michaelrobertsutton.com](https://michaelrobertsutton.com)

---

<details>
<summary>About this repository</summary>

Source code for [michaelrobertsutton.com](https://michaelrobertsutton.com) — built with vanilla HTML, CSS, and JavaScript. No frameworks, no build step.

**Local development**

```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

**Deployment**

Deploys to S3 + CloudFront via `deploy.sh`. Requires AWS CLI `personal` profile and `CLOUDFRONT_DISTRIBUTION_ID` in environment.

```bash
./deploy.sh
```

</details>
