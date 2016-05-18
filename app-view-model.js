import can from 'can';
import $ from 'jquery';
import 'can/map/define/';

var ApplicationViewModel = can.Map.extend({
    define: {
        page: {
            type: 'string'
        },
        color: {
            type: 'string'
        }
    }
});

export default ApplicationViewModel;