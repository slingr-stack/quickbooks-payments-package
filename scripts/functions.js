/****************************************************
 Dependencies
 ****************************************************/

var httpReference = dependencies.http;

var httpDependency = {
    get: httpReference.get,
    post: httpReference.post,
    put: httpReference.put,
    patch: httpReference.patch,
    delete: httpReference.delete,
    head: httpReference.head,
    options: httpReference.options
};
var httpService = {};

function handleRequestWithRetry(requestFn, options, callbackData, callbacks) {
    try {
        return requestFn(options, callbackData, callbacks);
    } catch (error) {
        sys.logs.info("[quickbookspayments] Handling request "+JSON.stringify(error));
        refreshQuickBooksToken();
    }
}

function createWrapperFunction(requestFn) {
    return function(options, callbackData, callbacks) {
        return handleRequestWithRetry(requestFn, options, callbackData, callbacks);
    };
}

for (var key in httpDependency) {
    if (typeof httpDependency[key] === 'function') httpService[key] = createWrapperFunction(httpDependency[key]);
}

/****************************************************
 Helpers
 ****************************************************/

exports.customers = {};

exports.customers.bankAccounts = {};

exports.customers.bankAccounts.createFromToken = {};

exports.customers.cards = {};

exports.customers.cards.createFromToken = {};

exports.payments = {};

exports.payments.charges = {};

exports.payments.charges.refunds = {};

exports.payments.charges.capture = {};

exports.payments.txnRequests = {};

exports.payments.txnRequests.void = {};

exports.payments.echecks = {};

exports.payments.echecks.refunds = {};

exports.payments.tokens = {};

exports.payments.tokens.ie = {};

exports.customers.bankAccounts.post = function(customerId, httpOptions) {
    if (!customerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerId].');
        return;
    }
    var url = parse('/customers/:customerId/bank-accounts', [customerId]);
    sys.logs.debug('[quickbookspayments] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(QuickbooksPayments(options));
};

exports.customers.bankAccounts.createFromToken.post = function(customerId, httpOptions) {
    if (!customerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerId].');
        return;
    }
    var url = parse('/customers/:customerId/bank-accounts/createFromToken', [customerId]);
    sys.logs.debug('[quickbookspayments] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(QuickbooksPayments(options));
};

exports.customers.bankAccounts.delete = function(customerId, accountId, httpOptions) {
    if (!customerId || !accountId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerId,accountId].');
        return;
    }
    var url = parse('/customers/:customerId/bank-accounts/:accountId', [customerId, accountId]);
    sys.logs.debug('[quickbookspayments] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(QuickbooksPayments(options));
};

exports.customers.bankAccounts.get = function(customerId, accountId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/customers/:customerId/bank-accounts', [customerId]);
			break;
		case 2:
			url = parse('/customers/:customerId/bank-accounts/:accountId', [customerId, accountId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[quickbookspayments] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(QuickbooksPayments(options));
};

exports.customers.cards.post = function(customerId, httpOptions) {
    if (!customerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerId].');
        return;
    }
    var url = parse('/customers/:customerId/cards', [customerId]);
    sys.logs.debug('[quickbookspayments] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(QuickbooksPayments(options));
};

exports.customers.cards.createFromToken.post = function(customerId, httpOptions) {
    if (!customerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerId].');
        return;
    }
    var url = parse('/customers/:customerId/cards/createFromToken', [customerId]);
    sys.logs.debug('[quickbookspayments] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(QuickbooksPayments(options));
};

exports.customers.cards.delete = function(customerId, cardId, httpOptions) {
    if (!customerId || !cardId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerId,cardId].');
        return;
    }
    var url = parse('/customers/:customerId/cards/:cardId', [customerId, cardId]);
    sys.logs.debug('[quickbookspayments] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(QuickbooksPayments(options));
};

exports.customers.cards.get = function(customerId, cardId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/customers/:customerId/cards', [customerId]);
			break;
		case 2:
			url = parse('/customers/:customerId/cards/:cardId', [customerId, cardId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[quickbookspayments] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(QuickbooksPayments(options));
};

exports.payments.charges.post = function(httpOptions) {
    var url = parse('/payments/charges');
    sys.logs.debug('[quickbookspayments] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(QuickbooksPayments(options));
};

exports.payments.charges.refunds.get = function(chargeId, refundId, httpOptions) {
    if (!chargeId || !refundId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [chargeId,refundId].');
        return;
    }
    var url = parse('/payments/charges/:chargeId/refunds/:refundId', [chargeId, refundId]);
    sys.logs.debug('[quickbookspayments] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(QuickbooksPayments(options));
};

exports.payments.charges.get = function(chargeId, httpOptions) {
    if (!chargeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [chargeId].');
        return;
    }
    var url = parse('/payments/charges/:chargeId', [chargeId]);
    sys.logs.debug('[quickbookspayments] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(QuickbooksPayments(options));
};

exports.payments.charges.refunds.post = function(chargeId, httpOptions) {
    if (!chargeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [chargeId].');
        return;
    }
    var url = parse('/payments/charges/:chargeId/refunds', [chargeId]);
    sys.logs.debug('[quickbookspayments] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(QuickbooksPayments(options));
};

exports.payments.charges.capture.post = function(chargeId, httpOptions) {
    if (!chargeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [chargeId].');
        return;
    }
    var url = parse('/payments/charges/:chargeId/capture', [chargeId]);
    sys.logs.debug('[quickbookspayments] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(QuickbooksPayments(options));
};

exports.payments.txnRequests.void.post = function(chargeRequestId, httpOptions) {
    if (!chargeRequestId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [chargeRequestId].');
        return;
    }
    var url = parse('/payments/txn-requests/:chargeRequestId/void', [chargeRequestId]);
    sys.logs.debug('[quickbookspayments] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(QuickbooksPayments(options));
};

exports.payments.echecks.post = function(httpOptions) {
    var url = parse('/payments/echecks');
    sys.logs.debug('[quickbookspayments] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(QuickbooksPayments(options));
};

exports.payments.echecks.refunds.get = function(echeckId, refundId, httpOptions) {
    if (!echeckId || !refundId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [echeckId,refundId].');
        return;
    }
    var url = parse('/payments/echecks/:echeckId/refunds/:refundId', [echeckId, refundId]);
    sys.logs.debug('[quickbookspayments] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(QuickbooksPayments(options));
};

exports.payments.echecks.get = function(echeckId, httpOptions) {
    if (!echeckId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [echeckId].');
        return;
    }
    var url = parse('/payments/echecks/:echeckId', [echeckId]);
    sys.logs.debug('[quickbookspayments] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(QuickbooksPayments(options));
};

exports.payments.echecks.refunds.post = function(echeckId, httpOptions) {
    if (!echeckId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [echeckId].');
        return;
    }
    var url = parse('/payments/echecks/:echeckId/refunds', [echeckId]);
    sys.logs.debug('[quickbookspayments] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(QuickbooksPayments(options));
};

exports.payments.tokens.post = function(httpOptions) {
    var url = parse('/payments/tokens');
    sys.logs.debug('[quickbookspayments] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(QuickbooksPayments(options));
};

exports.payments.tokens.ie.post = function(httpOptions) {
    var url = parse('/payments/tokens/ie');
    sys.logs.debug('[quickbookspayments] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(QuickbooksPayments(options));
};

/****************************************************
 Public API - Generic Functions
 ****************************************************/

exports.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(QuickbooksPayments(options), callbackData, callbacks);
};

exports.post = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(QuickbooksPayments(options), callbackData, callbacks);
};

exports.put = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(QuickbooksPayments(options), callbackData, callbacks);
};

exports.patch = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(QuickbooksPayments(options), callbackData, callbacks);
};

exports.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(QuickbooksPayments(options), callbackData, callbacks);
};

exports.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.head(QuickbooksPayments(options), callbackData, callbacks);
};

exports.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.options(QuickbooksPayments(options), callbackData, callbacks);
};

exports.utils = {};

exports.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

exports.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

exports.utils.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

exports.utils.fromMillisToDate = function(params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
};

exports.utils.getConfiguration = function (property) {
    sys.logs.debug('[quickbookspayments] Get property: '+property);
    return config.get(property);
};

/****************************************************
 Private helpers
 ****************************************************/

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contain the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
}

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString)

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string' && typeof (args[i]) != 'number') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}

/****************************************************
 Configurator
 ****************************************************/

var QuickbooksPayments = function (options) {
    options = options || {};
    options= setApiUri(options);
    options= setRequestHeaders(options);
    return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
    var QUICKBOOKSPAYMENTS_API_BASE_URL = "https://api.intuit.com/quickbooks/v4";
    var QUICKBOOKSPAYMENTS_API_BASE_URL_SANDBOX = "https://sandbox.api.intuit.com/quickbooks/v4";
    var API_URL = config.get("quickBooksEnvironment") === "PRODUCTION" ? QUICKBOOKSPAYMENTS_API_BASE_URL : QUICKBOOKSPAYMENTS_API_BASE_URL_SANDBOX;
    var url = options.path || "";
    options.url = API_URL + url;
    sys.logs.debug('[quickbookspayments] Set url: ' + options.path + "->" + options.url);
    return options;
}

function setRequestHeaders(options) {
    var headers = options.headers || {};
    headers = mergeJSON(headers, {"Authorization": "Bearer" + config.get("accessToken")});
    headers = mergeJSON(headers, {"Content-Type": "application/json"});
    headers = mergeJSON(headers, {"Accept": "application/json"});

    options.headers = headers;
    return options;
}

function refreshQuickBooksToken() {
    var refreshTokenResponse = svc.http.post({
        url: "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: {
            client_id: config.get("clientId"),
            client_secret: config.get("clientSecret"),
            grant_type: "refresh_token",
            refresh_token: config.get("refreshToken")
        },
        authorization: {
            type: "basic",
            username: config.get("accessToken"),
            password: config.get("refreshToken")
        }
    });
    config.set("accessToken", refreshTokenResponse.accessToken);
}


function mergeJSON (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}
