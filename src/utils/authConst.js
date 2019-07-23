
const authority = process.env.REACT_APP_AUTH_URL || "http://localhost:5000";

const authConfig = {
    reactAppAuthUrl: authority,
    clientId: process.env.REACT_APP_IDENTITY_CLIENT_ID || "admin",
    redirectUri: process.env.REACT_APP_REDIRECT_URL || "http://localhost:3000",
    login: authority + "/auth",
    silentRedirectUri: process.env.REACT_APP_SILENT_REDIRECT_URL || "",
    postLogoutRedirectUri: process.env.REACT_APP_LOGOFF_REDIRECT_URL || "",

}

export const IDENTITY_CONFIG = {
    authority: authConfig.reactAppAuthUrl, //(string): The URL of the OIDC provider.
    client_id: authConfig.clientId, //(string): Your client application's identifier as registered with the OIDC provider.
    redirect_uri: authConfig.redirectUri, //The URI of your client application to receive a response from the OIDC provider.
    login: authConfig.login,
    automaticSilentRenew: false, //(boolean, default: false): Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.
    loadUserInfo: false, //(boolean, default: true): Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.
    silent_redirect_uri: authConfig.silentRedirectUri, //(string): The URL for the page containing the code handling the silent renew.
    post_logout_redirect_uri: authConfig.postLogoutRedirectUri, // (string): The OIDC post-logout redirect URI.
    audience: "admin", //is there a way to specific the audience when making the jwt
    responseType: "id_token token", //(string, default: 'id_token'): The type of response desired from the OIDC provider.
    grantType: "password",
    scope: "openid profile admin", //(string, default: 'openid'): The scope being requested from the OIDC provider.
    webAuthResponseType: "id_token token"
};

export const METADATA_OIDC = {
    issuer: "https://identityserver",
    jwks_uri: authConfig.reactAppAuthUrl + "/jwks",
    authorization_endpoint: authConfig.reactAppAuthUrl + "/connect/authorize",
    token_endpoint: authConfig.reactAppAuthUrl + "/connect/token",
    userinfo_endpoint: authConfig.reactAppAuthUrl + "/connect/userinfo",
    end_session_endpoint: authConfig.reactAppAuthUrl + "/connect/endsession",
    check_session_iframe: authConfig.reactAppAuthUrl + "/connect/checksession",
    revocation_endpoint: authConfig.reactAppAuthUrl + "/connect/revocation",
    introspection_endpoint: authConfig.reactAppAuthUrl + "/connect/introspect"
};