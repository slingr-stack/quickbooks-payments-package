# Javascript API

The Javascript API of the quickbookspayments package has three pieces:

- **HTTP requests**: These allow making regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the package usage in SLINGR.

## HTTP requests
You can make `POST`,`DELETE`,`GET` requests to the [quickbookspayments API](API_URL_HERE) like this:
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

