import can from 'can';
import 'can/map/define/';
import Bank from 'models/bank/';
import Customer from 'models/customer/';
import _ from 'lodash';

import 'can-validate/can-validate';
import 'can-validate/map/validate/';
import 'can-validate/shims/validatejs.shim';

export default can.Map.extend({

    define: {
        // newCustomer: {
        //     value: {
        //         name: '',
        //         id: '',
        //         email: ''
        //     }
        // },
        myNum: {
            value: 'santosh',
            validate: {
                required: true,
                numericality: {
                    greaterThan: 5,
                    message: '^This is a custom message! Hi!'
                }
            }
        },
        isRequired: {
            value: true,
            type: 'boolean'
        },
        myVal: {
            type: 'string',
            validate: {
                required: function() {
                    return this.attr('isRequired') || false;
                },
                validateOnInit: true
            }
        }
    },
    addCustomer: function(ctx, $el) {
        return false;
    },
    doValidate: function() {
        console.log(this.validate());
        this.validate();
    },
    doReset: function(){
      this.attr('myNum','default error');
      this.attr('myVal','');
    }
});
