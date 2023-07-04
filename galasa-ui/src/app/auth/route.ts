/*
 * Copyright contributors to the Galasa project
 */
// Stop this route from being pre-rendered
export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Issuer, generators } from 'openid-client';

// Get an OpenID client for the WebUI as registered with Dex
export const getOpenIdClient = async () => {
  const issuerUrl = process.env.DEX_ISSUER_URL ?? 'http://127.0.0.1:5556/dex';
  const callbackUrl = `${process.env.WEBUI_HOST_URL}/auth/callback`;

  return Issuer.discover(issuerUrl).then(
    (dexIssuer) =>
      new dexIssuer.Client({
        client_id: 'galasa-webui',
        client_secret: process.env.DEX_CLIENT_SECRET,
        redirect_uri: [callbackUrl],
        response_types: ['code'],
      })
  );
};

// GET request handler for requests to /auth
export async function GET(request: Request) {
  const state = generators.state();
  const authUrl = (await getOpenIdClient()).authorizationUrl({
    scope: 'openid email profile offline_access',
    state,
  });

  // Save the state parameter in a cookie so that it can be checked during the callback to the webui.
  cookies().set('state', state);

  redirect(authUrl);
}
