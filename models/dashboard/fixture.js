import can from 'can/';
import 'can/util/fixture/';
import URL from 'utils/urls';
import _ from 'lodash';

function getData(params) {
	var data = {
		"status": "SUCCESS",
		"responseCode": "0000",
		"responseText": "Request processed successfully",
	}
}


var url = URL + 'adminmodule/dashboard';
can.fixture('POST ' + url, function(options) {
	console.log('FIXTURE: ' + url, arguments);
	var params = JSON.parse(options.data);
	return getData(params);
});