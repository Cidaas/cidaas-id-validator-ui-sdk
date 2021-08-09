export function invokeCase(token, settingsId, baseUrl, idValidatorUrl) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onload = function (e) {
    if (this.status == 201) {
      const redirectUrl = decodeURIComponent(this.response.data.case_processing_url);
      window.location.href = redirectUrl;
    }
  };
  xhr.open('POST', baseUrl + '/idval-sign-srv/caseinvocation');
  xhr.setRequestHeader("Authorization", "Bearer " + token);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ 'redirect_url': idValidatorUrl, 'validation_settings_id': settingsId }));
}