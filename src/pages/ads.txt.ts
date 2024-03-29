/* global Response */
import type { APIRoute } from 'astro';

const GOOGLE_ADSENSE_PUBLISHER_ID =
  import.meta.env.PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID.replace('ca-', '');

export const GET: APIRoute = async () => {
  return new Response(
    `google.com, ${GOOGLE_ADSENSE_PUBLISHER_ID}, DIRECT, f08c47fec0942fa0`,
  );
};
