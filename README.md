## About cidaas:
[cidaas](https://www.cidaas.com)
 is a fast and secure Cloud Identity & Access Management solution that standardises what’s important and simplifies what’s complex.

## Feature set includes:
* Single Sign On (SSO) based on OAuth 2.0, OpenID Connect, SAML 2.0 
* Multi-Factor-Authentication with more than 14 authentication methods, including TOTP and FIDO2 
* Passwordless Authentication 
* Social Login (e.g. Facebook, Google, LinkedIn and more) as well as Enterprise Identity Provider (e.g. SAML or AD) 
* Security in Machine-to-Machine (M2M) and IoT

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
