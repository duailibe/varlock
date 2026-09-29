/**
 * Loading with no schema (no .env files found, or files with no items defined) is an error
 * everywhere, including `load --format json-full` (used by `varlock/auto-load` and the framework
 * integrations), unless the user explicitly opts in with `_VARLOCK_ALLOW_NO_SCHEMA`.
 */

export const ALLOW_NO_SCHEMA_ENV_VAR = '_VARLOCK_ALLOW_NO_SCHEMA';

/** true when the user explicitly opted in to running with no schema */
export function isNoSchemaAllowed(env: Record<string, string | undefined> = process.env) {
  const value = env[ALLOW_NO_SCHEMA_ENV_VAR]?.trim().toLowerCase();
  return value === '1' || value === 'true';
}

/**
 * @deprecated no-op: the CLI now reports a missing schema as a load error. Kept so an older
 * integration build that still imports it keeps working.
 */
export function warnIfNoConfigLoaded(_parsed?: unknown) {
  // intentionally empty
}
