import { ShieldConfig } from '@ioc:Adonis/Addons/Shield'

export const csp: ShieldConfig['csp'] = {

  enabled: false,
  directives: {
  },
  reportOnly: false,
}

export const csrf: ShieldConfig['csrf'] = {
  enabled: true,
  exceptRoutes: [],
  enableXsrfCookie: true,
  methods: ['POST', 'PUT', 'PATCH', 'DELETE'],
}

export const dnsPrefetch: ShieldConfig['dnsPrefetch'] = {

  enabled: true,

  /*
  |--------------------------------------------------------------------------
  | Allow or Dis-Allow Explicitly
  |--------------------------------------------------------------------------
  |
  | The `enabled` boolean does not set `X-DNS-Prefetch-Control` header. However
  | the `allow` boolean controls the value of `X-DNS-Prefetch-Control` header.
  |
  | - When `allow = true`, then `X-DNS-Prefetch-Control = 'on'`
  | - When `allow = false`, then `X-DNS-Prefetch-Control = 'off'`
  |
  */
  allow: true,
}

/*
|--------------------------------------------------------------------------
| Iframe Options
|--------------------------------------------------------------------------
|
| xFrame defines whether or not your website can be embedded inside an
| iframe. Choose from one of the following options.
|
| - DENY
| - SAMEORIGIN
| - ALLOW-FROM http://example.com
|
| Learn more at https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
*/
export const xFrame: ShieldConfig['xFrame'] = {
  enabled: true,
  action: 'DENY',
}

/*
|--------------------------------------------------------------------------
| Http Strict Transport Security
|--------------------------------------------------------------------------
|
| A security to ensure that a browser always makes a connection over
| HTTPS.
|
| Learn more at https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
|
*/
export const hsts: ShieldConfig['hsts'] = {
  enabled: true,
  /*
  |--------------------------------------------------------------------------
  | Max Age
  |--------------------------------------------------------------------------
  |
  | Control, how long the browser should remember that a site is only to be
  | accessed using HTTPS.
  |
  */
  maxAge: '180 days',

  /*
  |--------------------------------------------------------------------------
  | Include Subdomains
  |--------------------------------------------------------------------------
  |
  | Apply rules on the subdomains as well.
  |
  */
  includeSubDomains: true,

  /*
  |--------------------------------------------------------------------------
  | Preloading
  |--------------------------------------------------------------------------
  |
  | Google maintains a service to register your domain and it will preload
  | the HSTS policy. Learn more https://hstspreload.org/
  |
  */
  preload: false,
}

/*
|--------------------------------------------------------------------------
| No Sniff
|--------------------------------------------------------------------------
|
| Browsers have a habit of sniffing content-type of a response. Which means
| files with .txt extension containing Javascript code will be executed as
| Javascript. You can disable this behavior by setting nosniff to false.
|
| Learn more at https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
|
*/
export const contentTypeSniffing: ShieldConfig['contentTypeSniffing'] = {
  enabled: true,
}
