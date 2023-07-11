/* eslint-disable no-unused-vars, no-redeclare */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GOOGLE_ANALYTICS_TAG: string;
  readonly GOOGLE_SITE_VERIFICATION: string;
  readonly PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID: string;
  readonly PUBLIC_GOOGLE_ADSENSE_SLOT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
