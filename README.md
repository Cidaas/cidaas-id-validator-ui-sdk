# About cidaas ID Validator

The cidaas ID Validator is an innovative ID verification solution that offers a complete, fully automated, eIDAS-compliant digital identity check for different documents like an ID card, passport, driving license, etc. Agile and intuitive AI models help verify the identity documents and the liveness of a person quickly.

## cidaas ID Validator UI SDK

This cidaas ID Validator UI SDK provides a set of software tools based on typescript, used to help intergating the cidaas ID Validator UI.

#### Installation

```
npm install @cidaas/id-validator-sdk
```

### Usage

#### Case Invocation

To invoke a new case, call **invokeCase()**. Afterwards a new case will be generated and you will be redirected to id validator url.

##### Sample code

```
import { invokeCase } from 'cidaas-id-validator-ui-sdk';

...

invokeCase(access_token, case_setting_id, base_url, id_validator_url, client_id);
```
