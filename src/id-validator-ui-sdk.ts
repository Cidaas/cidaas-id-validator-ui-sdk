import { CaseInvocationResponse } from './ICaseInvocationResponse';
export function invokeCase(
  token: string,
  settingsId: string,
  baseUrl: string,
  idValidatorUrl: string,
  clientId: string,
  externalReference?: string
) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.onload = function (e) {
    if (this.status == 201) {
      const response: CaseInvocationResponse = JSON.parse(this.response)
      const redirectUrl = decodeURIComponent(response.data.case_processing_url);
      window.location.href = `${redirectUrl}?client_id=${response.data.client_id}&flow_type=${response.data.flow_type}`;
    }
  };
  xhr.open("POST", baseUrl + "/idval-sign-srv/caseinvocation");
  xhr.setRequestHeader("Authorization", "Bearer " + token);
  xhr.setRequestHeader("Content-Type", "application/json");
  let json = JSON.stringify({ redirect_url: idValidatorUrl, validation_settings_id: settingsId, client_id: clientId });
  if (externalReference) {
    json = json.concat(JSON.stringify({ external_reference: externalReference }));
  }
  xhr.send(json);
}
