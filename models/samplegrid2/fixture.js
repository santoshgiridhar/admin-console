import can from 'can/';
import 'can/util/fixture/';
import URL from 'utils/urls';
import _ from 'lodash';

var i = -1, items =10, params=null;
function getData() {
  var sample_data = {
    'sampleData': (i < items - 1) && _.times(params === null ? items : params, function(k) {
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


var url = '/samplegrid2'; 
can.fixture('GET ' + url, function() {
	console.log('FIXTURE: ' + url);
	//var params = JSON.parse(options.data);
  console.log(getData());
	return getData();
});