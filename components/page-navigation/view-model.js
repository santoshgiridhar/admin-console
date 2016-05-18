import can from 'can';
import "can/route/pushstate/pushstate";
import 'can/map/define/';
import _ from 'lodash';
import 'components/page-dashboard/';
import 'components/page-samplegrid1/';
import 'components/page-samplegrid2/';


export default can.Map.extend({

	define: {},
	
	gotoMenu1: function(){ 
		console.log("gotoMenu1");
		
		can.route.attr('page','dashboard');
	},
	gotoMenu2: function(){
		console.log("gotoMenu2");
		
		can.route.attr('page','samplegrid1');
	},
	gotoMenu3: function(){
		console.log("gotoMenu3");
		
		can.route.attr('page','samplegrid2');
	}
});