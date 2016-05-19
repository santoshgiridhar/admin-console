import can from 'can/';
import 'can/util/fixture/';
import URL from 'utils/urls';
import _ from 'lodash';

var i = -1, items =10, params=null;
function getData() {
  var sample_data = {
    'sampleData': (i < items - 1) && _.times(params.limit === null ? items : params.limit, function(k) {
      return {
        'amount': Math.round(122921.39 * Math.random() * 100) / 100,
        'country': ['IND', 'EUR', 'RUS'][Math.floor(Math.random() * 3)],
        'region': ['India', 'Europe', 'Russia'][Math.floor(Math.random() * 3)],
        'currency': 'USD',
        'content': ['Movie', 'Music', 'RingTone', 'Radio'][Math.floor(Math.random() * 4)]
      }
    }),
    'totRecCnt': items,
    'responseCode': '0000',
    'status': 'SUCCESS',
    'view': 'Sample Grid 1',
    'responseText': 'Request processed successfully'
  };
  return sample_data;
}


var url = '/samplegrid1'; console.log("santosh-0", url);
can.fixture('GET ' + url, function(options) {
	console.log('FIXTURE: ' + url);
	var params = JSON.parse(options.data);
	return getData();
});