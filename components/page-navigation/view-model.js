import can from 'can';
import "can/route/pushstate/pushstate";
import 'can/map/define/';
import _ from 'lodash';


export default can.Map.extend({

	define: {},
	
	gotoMenu1: function(){ 
		console.log("gotoMenu1");
		//can.route.ready();
		can.route.attr('page','dashboard');
		Promise.all([
	  		System.import('components/page-dashboard/')
	    ]).then(function(results) {
	    	var template = '<page-dashboard></page-dashboard>';
      		$('#content').html(can.stache(template)());
	    });		
      	
	},
	gotoMenu2: function(){
		console.log("gotoMenu2");
		//can.route.ready();
		can.route.attr('page','samplegrid1');
		Promise.all([
	  		System.import('components/page-samplegrid1/')
	    ]).then(function(results) {
	    	var template = '<page-samplegrid1></page-samplegrid1>';
      		$('#content').html(can.stache(template)());
	    });
	},
	gotoMenu3: function(){
		console.log("gotoMenu3");
		//can.route.ready();
		can.route.attr('page','samplegrid2');
		Promise.all([
	  		System.import('components/page-samplegrid2/')
	    ]).then(function(results) {
	    	var template = '<page-samplegrid2></page-samplegrid2>';
      		$('#content').html(can.stache(template)());
	    });
	}
});