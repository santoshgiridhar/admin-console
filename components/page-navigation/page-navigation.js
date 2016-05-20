import can from 'can';
import Component from 'can/component/';
import 'can/map/define/';
import './style.less!';
// import './style-responsive.less!';
import VM from './view-model';
import template from './template.stache!';
// import template from './template-responsive.stache!';
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
			$('#menu-toggle').click(function(e) {
				e.preventDefault();
				$('#wrappers').toggleClass('active');
				if ($('#menu-toggle').hasClass('move-left')) {
					$('#menu-toggle').removeClass('move-left').addClass('move-right');
					$('#menu-toggle span').removeClass('glyphicon-chevron-left').addClass('glyphicon-chevron-right');
					$('#wrappers li').css('left','175px');
					$('#wrapper').css('padding-left','55px');
					$('.menu_text').css('display','none');
				} else {
					$('#menu-toggle').removeClass('move-right').addClass('move-left');
					$('#menu-toggle span').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-left');
					$('#wrappers li').css('left','0px');
					$('.menu_text').css('display','block').css('float','left');
					$('#wrapper').css('padding-left','225px');
				}
			});
			// $("#menu-toggle").click(function(e) {
			//     e.preventDefault();
			//     $("#wrapper").toggleClass("active");
			// });

		}
	}
});