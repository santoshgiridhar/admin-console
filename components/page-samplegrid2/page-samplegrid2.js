import can from 'can';
import Component from 'can/component/';
import 'can/map/define/';
import './style.less!';
import VM from './view-model';
import template from './template.stache!';
import pagenavigation from 'components/page-navigation/';
//import pagelogout from 'components/page-logout/';


can.Component.extend({
	tag: 'page-samplegrid2',
	viewModel: VM,
	template: template,
	events: {
		'inserted': function() {
			console.log('loaded sample grid 2');
		}
	}
});