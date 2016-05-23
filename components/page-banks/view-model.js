import can from 'can';
import 'can/map/define/';
import Bank from 'models/bank/';
import Customer from 'models/customer/';
import _ from 'lodash';

export default can.Map.extend({

  define: {
    banks: {
      value: {
        footer: null
      }
    }
  },
  fetchData: function(){
    var self = this;

    var requestOptions = {
      'searchRequest': {
        'regionId': 2,
        'offset': 0,
        'limit': 20,
        'excelOutput': false,
        'workflowId' : null
      },
      'secretKey': 'sampledata',
      'requestTimeStamp': 1433322546015
    };

    Bank.findAll(requestOptions, function(data){
      self.attr('banks', data);
    });
  }
});
