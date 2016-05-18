import can from 'can/';
import 'can/util/fixture/';
import URL from 'utils/urls';
import _ from 'lodash';

function getData(params) {
	var data = {
		"status": "SUCCESS",
		"responseCode": "0000",
		"responseText": "Request processed successfully",
		"loginUserName": "test",
		"loginPassword": "test"
	}
}


var url = URL + 'adminmodule/login';
can.fixture('POST ' + url, function(options) {
	console.log('FIXTURE: ' + url, arguments);
	var params = JSON.parse(options.data);
	return getData(params);
});