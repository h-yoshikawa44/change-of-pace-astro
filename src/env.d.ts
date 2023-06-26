/* eslint-disable no-unused-vars, no-redeclare */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GOOGLE_ANALYTICS_TAG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
