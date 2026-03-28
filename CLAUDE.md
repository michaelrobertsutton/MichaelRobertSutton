# michaelrobertsutton.com

Static HTML portfolio site. No build step required.

## Deploying to Production

When the user says "deploy", "push to production", "ship it", or similar — run:

```
./deploy.sh
```

This syncs all site files to S3 (`michaelrobertsutton.com`) and invalidates the CloudFront cache (`EA1U4ZQKJ4RE3`). Uses the `personal` AWS CLI profile.

## Design System
Always read DESIGN.md before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that doesn't match DESIGN.md.

## Local Development

```
python3 -m http.server 8000
```
