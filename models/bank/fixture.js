import can from 'can/';
import 'can/util/fixture/';
import URL from 'utils/urls';
import _ from 'lodash';

var i = -1,
  items = 10,
  params = null;

/**
 * [getData description]
 * @return {[type]} [description]
 */
function getData() {
  var sample_data = {
    'sampleData': [{
      "_id": "28dm1",
      "slug": "bank-1",
      "name": "Bank 1"
    }, {
      "_id": "13tb2",
      "slug": "bank-2",
      "name": "Bank 2"
    }, {
      "_id": "52zr3",
      "slug": "bank-3",
      "name": "Bank 3"
    }]
  };
  return sample_data;
}



var url = '/banks';
can.fixture('GET ' + url, function() {
    console.log('FIXTURE: ' + url);
    //var params = JSON.parse(options.data);
    console.log(getData());
    return getData();
  });
  //can.fixture.delay = 5000;
