import can from 'can';
import 'can/map/define/';
import DataModel from 'models/samplegrid1/';
import _ from 'lodash';


export default can.Map.extend({
  
  define: {
    sampleData: {
      value: {
        footer: null
      }
    },

  },
  items:{'test':'test'},
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

    DataModel.findAll(requestOptions, function(data){
      self.attr('sampleData', data);
    });
  }
});