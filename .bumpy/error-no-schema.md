---
varlock: major
"@varlock/vite-integration": patch
"@varlock/nextjs-integration": patch
"@varlock/expo-integration": patch
---

`varlock/auto-load` and the framework integrations now fail when no .env schema is found (no .env files, or no items defined), matching `varlock load` and `varlock run`. `load --format json-full` reports it in `errors.root` and exits non-zero. Set `_VARLOCK_ALLOW_NO_SCHEMA=1` to keep running with an empty config.
