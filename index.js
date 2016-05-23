// jQuery
import $ from 'jquery';

// CanJS
import can from 'can';
import "can/route/pushstate/pushstate";

// Bootstrap
import bootstrap from 'bootstrap';
import css_bootstrap from 'bootstrap.css!';

// Components
import 'components/page-navigation/';
import index_template from 'index.stache!';
//import 'index.less!'; //Not used currently


//DB
//import DB from 'pouchdb'


// Create an instance of AppViewModel (appViewModel)
var ApplicationViewModel = can.Map.extend({
  define: {
    '*': {
      serialize: false
    },
    page: {
      type: 'string',
      serialize: true
    },
    color: {
      type: 'string',
      serialize: true
    }
  }
});
var appViewModel = new AppViewModel({});

// Make appState the route's internal can.Map
can.route.map(appViewModel);

// Each element that will be set on the app-state must be preceded by a colon
// Also, set a default value for page (the login page)
can.route('customers/:customerSlug', {page: 'customers'});
can.route('banks/:bankSlug', {page: 'banks'});
can.route(':page');

// Initialize routing
can.route.ready();

// Render the base application
// Link appState to index.stache
//$('#app').html(index(appViewModel));

$(document.body).append(index_template(appViewModel));


appViewModel.attr('page', 'navigation');
