import can from 'can';
import 'can/map/define/';
import DataModel from 'models/bank/';
import Customer from 'models/customer/';
import _ from 'lodash';

export default can.Map.extend({

  define: {
    banks: {
      value: {
        footer: null
      }
    },
    bankSlug: {
      get(){
        return can.route.attr('bankSlug');
      }
    },
    currentBank: {
      get(){
        let bankSlug = this.attr('bankSlug');
        if (bankSlug) {
          let currentBank;
          this.attr('banks').forEach(bank => {
            if (bank.slug === bankSlug) {
              currentBank = bank;
            }
          });
          return currentBank;
        }
      }
    },
    customers: {
      get(lastSetVal, setVal){
        let currentBank = this.attr('currentBank');
        if (currentBank) {
          Customer.findAll({bankId: currentBank._id}).then(customers => {
            setVal(customers);
          });
        }
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

    DataModel.findAll(requestOptions, function(data){
      self.attr('banks', data);
    });
  }
});
