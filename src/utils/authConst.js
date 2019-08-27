const authority = process.env.REACT_APP_AUTH_URL || 'http://172.16.31.138:5000';

const authConfig = {
    reactAppAuthUrl: authority,
    clientId: process.env.REACT_APP_IDENTITY_CLIENT_ID || 'admin-client',
    redirectUri:
        process.env.REACT_APP_REDIRECT_URL || 'https://172.16.31.138:3000',
    login: authority + '/auth',
    silentRedirectUri:
        process.env.REACT_APP_SILENT_REDIRECT_URL ||
        'https://172.16.31.138:3000/silentrenew',
    postLogoutRedirectUri:
        process.env.REACT_APP_LOGOFF_REDIRECT_URL ||
        'https://172.16.30.243:3000/logout/callback'
};

/**
 * IDENTITY_CONFIG: The config needed to establish the connection.
 * METADATA_OIDC: The extra info that you want to have in the token.
 */

export const IDENTITY_CONFIG = {
    authority: authConfig.reactAppAuthUrl, //(string): The URL of the OIDC provider.
    client_id: authConfig.clientId, //(string): Your client application's identifier as registered with the OIDC provider.
    redirect_uri: authConfig.redirectUri + '/signin-oidc', //The URI of your client application to receive a response from the OIDC provider.
    login: authConfig.login,
    automaticSilentRenew: false, //(boolean, default: false): Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.
    loadUserInfo: false, //(boolean, default: true): Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.
    silent_redirect_uri: authConfig.silentRedirectUri, //(string): The URL for the page containing the code handling the silent renew.
    post_logout_redirect_uri: authConfig.postLogoutRedirectUri, // (string): The OIDC post-logout redirect URI.
    audience: 'admin-client', //is there a way to specific the audience when making the jwt
    responseType: 'id_token', //(string, default: 'id_token'): The type of response desired from the OIDC provider.
    grantType: 'implicit',
    scope: 'openid profile admin', //(string, default: 'openid'): The scope being requested from the OIDC provider.
    webAuthResponseType: 'id_token token'
};

export const METADATA_OIDC = {
    issuer: authority,
    jwks_uri: authConfig.reactAppAuthUrl + '/jwks',
    authorization_endpoint: authConfig.reactAppAuthUrl + '/auth',
    token_endpoint: authConfig.reactAppAuthUrl + '/token',
    userinfo_endpoint: authConfig.reactAppAuthUrl + '/me',
    end_session_endpoint: authConfig.reactAppAuthUrl + '/session/end',
    check_session_iframe: authConfig.reactAppAuthUrl + '/connect/checksession',
    revocation_endpoint: authConfig.reactAppAuthUrl + '/token/revocation',
    introspection_endpoint: authConfig.reactAppAuthUrl + '/token/introspect'
};
