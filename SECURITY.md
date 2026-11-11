# Security

This is a static educational website. There are no application accounts, backend, API credentials or privileged application endpoints. Course source links and public static asset URLs are intentionally visible.

Use the repository Security tab → Report a vulnerability to submit a private report. Include the affected page and a minimal reproduction. Do not include personal information, credentials or private browser-storage contents. Avoid posting exploit details in public issues before the issue is assessed.

Content and progress imports are untrusted data. Imports are size-limited and validated, question text uses textContent, source markup is sanitized, and a restrictive CSP limits scripts/resources. Deployment uses pinned GitHub Actions, read-only default permissions, and a main-only Pages environment. Secret scanning and push protection are enabled.

The app does not send study progress anywhere. Browser local storage is not confidential and should not contain sensitive data. GitHub Pages handles hosting and may retain security access logs. CSP protections that need custom HTTP response headers are not claimed.

The repository has no application package dependencies. CI action revisions should be reviewed and kept current. Source-content updates must not execute downloaded rendering code or add runtime external services.
