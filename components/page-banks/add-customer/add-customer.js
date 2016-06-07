import can from 'can';
import Component from 'can/component/';
import './style.less!';
import VM from './view-model';
import template from './template.stache!';

can.Component.extend({
	tag: 'add-customer',
	viewModel: VM,
	template: template,
	events: {
		'inserted': function() {
			console.log('loaded add customer');

		}
	}
});
