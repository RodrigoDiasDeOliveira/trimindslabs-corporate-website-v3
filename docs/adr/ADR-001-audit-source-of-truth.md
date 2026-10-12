# ADR-001: Audit as the Source of Operational Truth

- **Status:** ACCEPTED
- **Date:** 2026-10-12
- **Scope:** Trimindslabs Corporate Website V3

## Context

The corporate website presents project metadata and an Engineering Dashboard. The inspected source already requests canonical project and site-content data from the Ecosystem Audit API. The dashboard also requests the Audit summary endpoint. Local content remains available for some modules as a fallback.

The dashboard currently displays `NOT_MEASURED` for Audit state, pipeline success, and security compliance, while the reported repository observation count is 22. The linked GitHub inventory contains 43 repositories. These numbers have different scopes: an Audit observation count is not the same as an account-wide repository inventory.

## Decision

1. The Ecosystem Audit API is the source of operational observations and measured dashboard indicators.
2. The website is a presentation layer; it must not manufacture maturity, pipeline success, security compliance, or current runtime status.
3. `NOT_MEASURED` must remain visible until sufficient evidence supports a measured value.
4. API errors and local fallbacks must be disclosed. Fallback content is not represented as a current Audit observation.
5. Repository counts retain their provenance and scope. The website must not substitute the account-wide GitHub count for the count returned by the Audit API.
6. A code merge or successful frontend build is not proof that the published site or the Audit API is currently serving the expected content.

## Consequences

- The current unmeasured indicators are honest and should not be changed merely to avoid displaying `NOT_MEASURED`.
- The difference between 22 observed repositories and 43 accessible GitHub repositories requires an explicit collection-scope/permission investigation.
- Website and Audit API runtime verification remain separate release checks.
- Product capability claims must be linked to implementation and runtime evidence, not only presentation content.
