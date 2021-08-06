export function invokeCase(token, settingsId, idValidatorUrl) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      window.location.href = response.redirectUrl;
    }
  };
  request.open('GET', 'https://nightlybuild.cidaas.de/idval-sign-srv/caseinvocation/' + settingsId + '?redirect_uri=' + idValidatorUrl);
  request.setRequestHeader("Authorization", "Bearer " + token);
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
}