import { CaseInvocationResponse } from './interface/ICaseInvocationResponse';
/**
 * This function will invoke a cidaas ID Validation case in the cidaas system and redirect to the cidaas ID Validator on a successful response
 * @param token Valid OAuth2 Token for the cidaas ID Validator application
 * @param settingsID UUID of the cidaas ID Validator setting that shall be used for this case
 * @param baseUrl Base URL of the cidaas tenant e.g. https://demo.cidaas.de
 * @param redirectURL URL to the destination where the user will be redirected to after finishing the cidaas ID Validation process
 * @param externalReference (Optional) String that can be used to identify a finished case
 */
export function invokeCase(
  token: string,
  settingsId: string,
  baseUrl: string,
  redirectURL: string,
  externalReference?: string
): void | string {
  // Create request
  const xhr = new XMLHttpRequest();
  const HTTP_NOT_FOUND = 404;
  const HTTP_UNAUTHORIZED = 401;

  // What to do when we get a response
  xhr.onload = function (e) {
    if (this.status === HTTP_NOT_FOUND || this.status === HTTP_UNAUTHORIZED) {
      console.info(`Error during Case Invocation. Status: ${this.status}`);
    } else {
      const response: CaseInvocationResponse = this.response;
      if (response && response.success && response.data) {
        const redirectUrl = response.data.case_redirect_url;
        window.location.href = redirectUrl;
      } else {
        console.info(`${response.error_code}: ${response.error}`);
      }
    }
  };

  // Set values for the case invocation request and send it
  xhr.responseType = 'json';
  xhr.open('POST', baseUrl + '/idval-sign-srv/caseinvocation');
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);
  xhr.setRequestHeader('Content-Type', 'application/json');
  let json = JSON.stringify({ redirect_url: redirectURL, validation_settings_id: settingsId });
  if (externalReference) {
    json = json.concat(JSON.stringify({ external_reference: externalReference }));
  }
  xhr.send(json);
}
