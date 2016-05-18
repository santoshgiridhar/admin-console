import can from 'can';
import "can/route/pushstate/pushstate";
import 'can/map/define/';
import _ from 'lodash';
import 'components/page-dashboard/';

//import AppViewModel from 'app-view-model';

//import loginModel from 'models/login/';

export default can.Map.extend({

	define: {
		userinfo: {
			get: function() {
				var userInfoObj = {
					loginName: this.attr('loginName'),
					loginPassword: this.attr('loginPassword')
				};
				return userInfoObj;
			}
		}
	},
	loginSuccess: false,
	loginUser: function() {
		console.log(this.attr('userinfo'));
		console.log("successfully");
		// loginModel.findOne({userInfoObj}).then(function(){
		// 	console.log("route to  dashboard");
		// });			
		// TODO: If successfull, copy above response to an appstate and carry it everywhere =) for now pass it dashboard
		//this.navigateTo('page-dashboard');
		// console.log(can.route.attr());
		// var appViewModel = new AppViewModel({});
		// can.route.map(appViewModel);
		// can.route(':page');
		this.attr('loginSuccess', true);
		can.route.ready();
		can.route.attr('page','dashboard');
		//appViewModel.attr('page', 'dashboard');
		return false;
	}
});