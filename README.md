# Trimindslabs Corporate Website V3

The public-facing corporate website for Trimindslabs. It presents project information, architecture explanations, engineering governance content, and an Engineering Dashboard.

## Runtime and architecture

- **Frontend:** React, TypeScript, Vite, Tailwind CSS.
- **Localization:** Portuguese, English, and Spanish through the language context and localized content records.
- **Canonical content source:** the Trimindslabs Ecosystem Audit API.
- **Deployment workflow:** GitHub Pages workflow in `.github/workflows/deploy-pages.yml`; a source merge alone does not prove that the published site has updated.

## Audit integration

The inspected source consumes these Audit endpoints:

- `GET /api/v1/site-content` for localized gates, vocabulary, articles, and architecture content.
- `GET /api/v1/projects` for the canonical project registry.
- `GET /api/v1/audit/ecosystem/observations` for repository observations.
- `GET /api/v1/audit/summary` for dashboard summary cards and audit events.

The dashboard should present `NOT_MEASURED` values as such. Missing or unmeasured evidence must not be converted into a success label. Local fallback content is a resilience mechanism, not evidence that the Audit API is synchronized; the UI should disclose fallback or API errors.

## Verification boundaries

- Source code and repository workflows establish implementation and CI evidence only.
- The deployed website and Audit API must be checked separately to establish live behavior.
- Project cards, diagrams, and marketing descriptions are not proof that a product capability is implemented or operational.
- The Audit API's observed repository count may differ from the account's full GitHub inventory. Do not replace the API's observed count with a manually copied inventory count.

## Development

```bash
npm install
npm run lint
npm run build
npm run dev
```

## Related architecture decision

See [ADR-001: Audit as the source of operational truth](docs/adr/ADR-001-audit-source-of-truth.md).
