# Triminds operational status taxonomy

The website must distinguish operational status from implementation maturity and audit-observation status.

## Product operational statuses

- `PRODUCTION`: the product has a production environment, a public promotional website/URL, and an online test sandbox. Use only when all three conditions are evidenced.
- `RUNNING`: a web system is reachable and its operational availability has been checked.
- `ACTIVE`: an active product or service that does not require a public URL to operate, or is in production without public online availability being a defining requirement.
- `ONLINE`: a public-facing promotional website or web resource is reachable; this does not by itself prove the product system is running.
- `PAUSED`: work is intentionally paused during discussion, planning, or implementation.
- `OFFLINE`: a web system expected to be reachable is not accessible, or has no operational URL published.

## Rules

1. `PRODUCTION` is a product-stage classification and must not be inferred from a deployment URL alone.
2. `RUNNING` and `ONLINE` require a recent availability check of the relevant target.
3. A promotional website can be `ONLINE` while the product API/system is `OFFLINE`.
4. `ACTIVE` must not be used as a euphemism for an unverified state; the project owner must confirm active lifecycle status.
5. `PAUSED` is a lifecycle decision, not a health-check failure.
6. Do not convert audit evidence states such as `NOT_MEASURED`, `PENDING`, or `HISTORICAL_EVIDENCE` into product operational statuses. They describe observations, not the product lifecycle.
7. Until a project has sufficient evidence and an explicit classification, do not guess its operational status. Keep implementation maturity and audit provenance separate.

The canonical operational status should be shared by the website, Ecosystem Audit and Portfolio where the project lifecycle is displayed. The Audit must preserve detailed observation/evidence states internally for traceability.
