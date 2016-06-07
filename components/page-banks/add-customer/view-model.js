import can from 'can';
import 'can/map/define/';
import Bank from 'models/bank/';
import Customer from 'models/customer/';
import _ from 'lodash';

export default can.Map.extend({

    define: {
        newCustomer: {
            value: {
                name: '',
                id: '',
                email: ''
            }
        }
    }
});
