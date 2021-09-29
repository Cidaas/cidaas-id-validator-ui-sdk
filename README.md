# About cidaas ID Validator

The cidaas ID Validator is an innovative ID verification solution that offers a complete, fully automated, eIDAS-compliant digital identity check for different documents like an ID card, passport, driving license, etc. Agile and intuitive AI models help verify the identity documents and the liveness of a person quickly.

# cidaas-id-validator-ui-sdk

This cidaas id validator ui sdk provides a set of software tools based on typescript, used to help developing the id validator ui.

#### Installation

```
npm install cidaas-id-validator-sdk
```

#### Usage

#### Case Invocation

to invoke a new case, call **invokeCase()**. Afterwards a new case will be generated and you will be redirected to id validator url.

##### Sample code
```
import { invokeCase } from 'cidaas-id-validator-ui-sdk';

...

invokeCase(accessToken, caseSettingId, base_url, id_validator_url);
```
