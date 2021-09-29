## cidaas-id-validator-sdk

Set of software tools based on typescript, used to help developing id validator ui

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
