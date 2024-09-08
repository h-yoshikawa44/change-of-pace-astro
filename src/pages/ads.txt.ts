/* global Response */
import type { APIRoute } from 'astro';
import { PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID } from 'astro:env/client';

const GOOGLE_ADSENSE_PUBLISHER_ID = PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID.replace(
  'ca-',
  '',
);

export const GET: APIRoute = async () => {
  return new Response(
    `google.com, ${GOOGLE_ADSENSE_PUBLISHER_ID}, DIRECT, f08c47fec0942fa0`,
  );
};
