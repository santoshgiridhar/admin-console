import can from 'can';
import Component from 'can/component/';
import './style.less!';
import VM from './view-model';
import template from './template.stache!';

can.Component.extend({
	tag: 'page-banks',
	viewModel: VM,
	template: template,
	events: {
		'inserted': function() {
			console.log('loaded sample grid 2');
			this.viewModel.fetchData();
		}
	}
});
