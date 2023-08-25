<table>
    <thead>
    <tr>
        <th>Title</th>
        <th>Last Updated</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Quickbooks Payments Package</td>
        <td>August 25, 2023</td>
        <td>Detailed description of the API of the Quickbooks Payments Package.</td>
    </tr>
    </tbody>
</table>

# Overview

The QuickBooks Payments endpoint allows you to interact with the QuickBooks Payments API.

Some futures are:

- Shortcuts for the REST API

In most cases the provided helpers and events are enough, but if you need to
use the QuickBooks Payments REST API you should go to their documentation for
 [API explorer](https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts).

## Configuration

To obtain the requested fields for configuration you need to log in to your intuit developer account and go to
 [Test connect to app (OAuth)](https://developer.intuit.com/v2/ui#/playground). On this page you need to:

 - Complete the form selecting the app you want to configure on the endpoint.

 - Once you select the app the Client ID and Client Secret fields are being populated. You can copy this values to the endpoint configuration.

 - Select the Scopes (make sure to select `Payments`).

 - Click on Get authorization code and authorize the app.

 - Then click on Get Tokens button.

 - Once you have the Tokens you can start making calls to the API. On this screen you need to access to the step 4 and copy
 the Access Token, the Refresh Token and Minor Version to the endpoint configuration. QuickBooks Online data services support 
 minor versions in order to provide a way for you to access incremental changes without breaking existing apps.

# Javascript API

The Javascript API of the quickbookspayments package has three pieces:

- **HTTP requests**: These allow making regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the package usage in SLINGR.

## HTTP requests
You can make `POST`,`DELETE`,`GET` requests to the [quickbookspayments API](https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts) like this:
```javascript
var response = pkg.quickbookspayments.functions.post('/payments/txn-requests/:chargeRequestId/void', body)
var response = pkg.quickbookspayments.functions.post('/payments/txn-requests/:chargeRequestId/void')
var response = pkg.quickbookspayments.functions.delete('/customers/:customerId/cards/:cardId')
var response = pkg.quickbookspayments.functions.get('/customers/:customerId/cards')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the package:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/customers/:customerId/bank-accounts'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.customers.bankAccounts.post(customerId, body)
```
---
* API URL: '/customers/:customerId/bank-accounts'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.customers.bankAccounts.get()
```
---
* API URL: '/customers/:customerId/cards'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.customers.cards.post(customerId, body)
```
---
* API URL: '/customers/:customerId/cards'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.customers.cards.get()
```
---
* API URL: '/customers/:customerId/bank-accounts/:accountId'
* HTTP Method: 'DELETE'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.customers.bankAccounts.delete(customerId, accountId)
```
---
* API URL: '/customers/:customerId/bank-accounts/:accountId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.customers.bankAccounts.get(customerId)
```
---
* API URL: '/customers/:customerId/bank-accounts/createFromToken'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.customers.bankAccounts.createFromToken.post(customerId, body)
```
---
* API URL: '/customers/:customerId/cards/:cardId'
* HTTP Method: 'DELETE'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.customers.cards.delete(customerId, cardId)
```
---
* API URL: '/customers/:customerId/cards/:cardId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.customers.cards.get(customerId)
```
---
* API URL: '/customers/:customerId/cards/createFromToken'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.customers.cards.createFromToken.post(customerId, body)
```
---
* API URL: '/payments/charges'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.payments.charges.post(body)
```
---
* API URL: '/payments/echecks'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.payments.echecks.post(body)
```
---
* API URL: '/payments/tokens'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.payments.tokens.post(body)
```
---
* API URL: '/payments/charges/:chargeId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.payments.charges.get(chargeId)
```
---
* API URL: '/payments/echecks/:echeckId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.payments.echecks.get(echeckId)
```
---
* API URL: '/payments/tokens/ie'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.payments.tokens.ie.post(body)
```
---
* API URL: '/payments/charges/:chargeId/capture'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.payments.charges.capture.post(chargeId, body)
```
---
* API URL: '/payments/charges/:chargeId/refunds'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.payments.charges.refunds.post(chargeId, body)
```
---
* API URL: '/payments/echecks/:echeckId/refunds'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.payments.echecks.refunds.post(echeckId, body)
```
---
* API URL: '/payments/txn-requests/:chargeRequestId/void'
* HTTP Method: 'POST'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.payments.txnRequests.void.post(chargeRequestId, body)
```
---
* API URL: '/payments/charges/:chargeId/refunds/:refundId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.payments.charges.refunds.get(chargeId, refundId)
```
---
* API URL: '/payments/echecks/:echeckId/refunds/:refundId'
* HTTP Method: 'GET'
* More info: https://developer.intuit.com/app/developer/qbpayments/docs/api/resources/all-entities/bankaccounts
```javascript
pkg.quickbookspayments.functions.payments.echecks.refunds.get(echeckId, refundId)
```
---

</details>

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the package:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire package and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>POST,DELETE,GET</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/customers/{customerId}/bank-accounts<br>/customers/{customerId}/bank-accounts/createFromToken<br>/customers/{customerId}/cards<br>/customers/{customerId}/cards/createFromToken<br>/payments/charges<br>/payments/charges/{chargeId}/refunds<br>/payments/charges/{chargeId}/capture<br>/payments/txn-requests/{chargeRequestId}/void<br>/payments/echecks<br>/payments/echecks/{echeckId}/refunds<br>/payments/tokens<br>/payments/tokens/ie<br>/customers/{customerId}/bank-accounts/{accountId}<br>/customers/{customerId}/cards/{cardId}<br>/customers/{customerId}/bank-accounts<br>/customers/{customerId}/bank-accounts/{accountId}<br>/customers/{customerId}/cards<br>/customers/{customerId}/cards/{cardId}<br>/payments/charges/{chargeId}/refunds/{refundId}<br>/payments/charges/{chargeId}<br>/payments/echecks/{echeckId}/refunds/{refundId}<br>/payments/echecks/{echeckId}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect a timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read a timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps work, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Create Bank Account

Creates a bank account for a customer in the quickbooks payments system.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Costumer Id</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Id of the costumer to associate the bank account created.
        </td>
    </tr>
    <tr>
        <td>Account Type</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Possible values are: <br>
            <i><strong>Personal Checking<br> Personal Savings <br> Business Checking <br> Business Savings</strong></i>
        </td>
    </tr>
    <tr>
        <td>Name</td>
        <td>text</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Name to identify the bank account.
        </td>
    </tr>
    <tr>
        <td>Account Number</td>
        <td>text</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The account number for the bank account.
        </td>
    </tr>
    <tr>
        <td>Routing Number</td>
        <td>text</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The routing number for the bank account.
        </td>
    </tr>
    <tr>
        <td>Phone</td>
        <td>text</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td>
            The phone number to associate to the bank account.
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


### Create Card

Creates a card for a customer in the quickbooks payments system.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Costumer Id</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Id of the costumer to associate the bank account created.
        </td>
    </tr>
    <tr>
        <td>Number of the card</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Number of the card to create. Without spaces or dashes.
        </td>
    </tr>
    <tr>
        <td>Expiration Mouth</td>
        <td>choice</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Number of the mouth of the expiration date of the card.
        </td>
    </tr>
    <tr>
        <td>Expiration Year</td>
        <td> number </td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Year of the expiration date of the card. 2 digits.
        </td>
    </tr>
    <tr>
        <td>CVC</td>
        <td> number </td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Number of the CVC of the card.
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>

</details>


### Create Token for Quickbooks Payments

Creates a token for a card or a bank in the quickbooks payments system.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Bank Account</td>
        <td> number </td>
        <td>no</td>
        <td> - </td>
        <td> if Card is not set. </td>
        <td>
              Id of the bank account to create the token.
        </td>
    </tr>
    <tr>
        <td>Card</td>
        <td> number </td>
        <td>no</td>
        <td> - </td>
        <td> if Bank Account is not set. </td>
        <td>
             Id of the card to create the token.
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*

## Dependencies
* HTTP Service (Latest Version)

# About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
