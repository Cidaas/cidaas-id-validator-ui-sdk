import { CaseInvocationResponse } from './interface/ICaseInvocationResponse';
import * as XMLHttpRequest from 'xhr2';
/**
 * This function will invoke a cidaas ID Validation case in the cidaas system and redirect to the cidaas ID Validator on a successful response
 * @param token Valid OAuth2 Token for the cidaas ID Validator application
 * @param settingsID UUID of the cidaas ID Validator setting that shall be used for this case
 * @param baseUrl Base URL of the cidaas tenant e.g. https://demo.cidaas.de
 * @param redirectURL URL to the destination where the user will be redirected to after finishing the cidaas ID Validation process
 * @param clientId UUID of the cidaas ID Validator application which can be found in the cidaas Admin Dashboard)
 * @param externalReference (Optional) String that can be used to identify a finished case
 * @returns String including the error code and message if the request was not successful
 */
export function invokeCase(
  token: string,
  settingsId: string,
  baseUrl: string,
  redirectURL: string,
  clientId: string,
  externalReference?: string
): void | string {
  // Create request
  const xhr = new XMLHttpRequest();

  // What to do when we get a response
  xhr.onload = function (e) {
    if (this.status === 401) {
      return '401: Unauthorized';
    } else {
      const response: CaseInvocationResponse = JSON.parse(this.response);
      if (response && response.success && response.data) {
        const redirectUrl = decodeURIComponent(response.data.case_processing_url);
        window.location.href = `${redirectUrl}?client_id=${response.data.client_id}&flow_type=${response.data.flow_type}`;
      } else {
        return `${response.error_code}: ${response.error}`;
      }
    }
  };

  // Set values for the case invocation request and send it
  xhr.responseType = 'json';
  xhr.open('POST', baseUrl + '/idval-sign-srv/caseinvocation');
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);
  xhr.setRequestHeader('Content-Type', 'application/json');
  let json = JSON.stringify({ redirect_url: redirectURL, validation_settings_id: settingsId, client_id: clientId });
  if (externalReference) {
    json = json.concat(JSON.stringify({ external_reference: externalReference }));
  }
  xhr.send(json);
}
