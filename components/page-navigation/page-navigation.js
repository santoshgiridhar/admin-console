import can from 'can';
import Component from 'can/component/';
import 'can/map/define/';
//import './style.less!';
import './style-responsive.less!';
import VM from './view-model';
//import template from './template.stache!';
import template from './template-responsive.stache!';
import 'components/page-dashboard/';
import 'components/page-samplegrid1/';
import 'components/page-samplegrid2/';



can.Component.extend({
	tag: 'page-navigation',
	viewModel: VM,
	template: template,
	events: {
		'inserted': function() {
			console.log('loaded navigation');
			$(document).ready(function () {
  $('[data-toggle=offcanvas]').click(function () {
    if ($('.sidebar-offcanvas').css('background-color') == 'rgb(255, 255, 255)') {
	    $('.list-group-item').attr('tabindex', '-1');
    } else {
	    $('.list-group-item').attr('tabindex', '');
    }
    $('.row-offcanvas').toggleClass('active');
    
  });
});

		}
	}
});