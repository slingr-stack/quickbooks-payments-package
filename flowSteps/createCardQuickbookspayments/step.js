/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.createCardQuickbookspayments = function (inputs) {

	var inputsLogic = {
		costumerId: inputs.costumerId || 0,
		number: inputs.number || "",
		expMonth: inputs.expMonth || 0,
		expYear: inputs.expYear || 0,
		cvc: inputs.cvc || 0
	};

	var QUICKBOOKSPAYMENTS_API_BASE_URL = "https://api.intuit.com/quickbooks/v4";
	var QUICKBOOKSPAYMENTS_API_BASE_URL_SANDBOX = "https://sandbox.api.intuit.com/quickbooks/v4";
	var API_URL = config.get("quickBooksEnvironment") === "PRODUCTION" ? QUICKBOOKSPAYMENTS_API_BASE_URL : QUICKBOOKSPAYMENTS_API_BASE_URL_SANDBOX;

	var options = {
		body: {
			number: inputsLogic.number,
			expMonth: inputsLogic.expMonth,
			expYear: inputsLogic.expYear,
			cvc: inputsLogic.cvc
		},
		url: API_URL + "/customers/" + inputsLogic.costumerId + "/cards"
	}

	options= setRequestHeaders(options);
	options= setAuthorization(options);

	return httpService.post(options)
};