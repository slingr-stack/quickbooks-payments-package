/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.createBankAccountQuickbookspayments = function (inputs) {

	var inputsLogic = {
		costumerId: inputs.costumerId || 0,
		name: inputs.name || "",
		accountNumber: inputs.accountNumber || 0,
		accountType: inputs.accountType || 0,
		phone: inputs.phone || 0,
		routingNumber: inputs.routingNumber || 0
	};

	var QUICKBOOKSPAYMENTS_API_BASE_URL = "https://api.intuit.com/quickbooks/v4";
	var QUICKBOOKSPAYMENTS_API_BASE_URL_SANDBOX = "https://sandbox.api.intuit.com/quickbooks/v4";
	var API_URL = config.get("quickBooksEnvironment") === "PRODUCTION" ? QUICKBOOKSPAYMENTS_API_BASE_URL : QUICKBOOKSPAYMENTS_API_BASE_URL_SANDBOX;

	var options = {
		body: {
			name: inputsLogic.name,
			accountNumber: inputsLogic.accountNumber,
			accountType: inputsLogic.accountType,
			phone: inputsLogic.phone,
			routingNumber: inputsLogic.routingNumber
		},
		url: API_URL + "/customers/" + inputsLogic.costumerId + "/bank-accounts"
	}

	options= setRequestHeaders(options);
	options= setAuthorization(options);

	return httpService.post(options)
};

function setRequestHeaders(options) {
	var headers = options.headers || {};
	headers = mergeJSON(headers, {"Content-Type": "application/json"});
	headers = mergeJSON(headers, {"Accept": "application/json"});

	options.headers = headers;
	return options;
}

function setAuthorization(options) {
	sys.logs.debug('[quickbooks] Setting header token oauth');
	var authorization = options.authorization || {};
	authorization = mergeJSON(authorization, {
		type: "oauth2",
		accessToken: config.get("accessToken"),
		headerPrefix: "Bearer"
	});
	options.authorization = authorization;
	return options;
}

function mergeJSON (json1, json2) {
	var result = {};
	var key;
	for (key in json1) {
		if(json1.hasOwnProperty(key)) result[key] = json1[key];
	}
	for (key in json2) {
		if(json2.hasOwnProperty(key)) result[key] = json2[key];
	}
	return result;
}
