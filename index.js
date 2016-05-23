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
import Bank from 'models/bank/';
import Customer from 'models/customer/';

// Create an instance of AppViewModel (appViewModel)
var AppMap = can.Map.extend({
  define: {
    '*': {
      serialize: false
    },
    page: {
      type: 'string',
      serialize: true
    },
    banks: {
      get(lastVal, setVal){
        Bank.findAll({}).then(banks => {
          setVal(banks);
        });
      }
    },
    bankSlug: {
      type: 'string',
      serialize: true
    },
    currentBank: {
      get(){
        let bankSlug = this.attr('bankSlug');
        let banks = this.attr('banks');
        if (bankSlug && banks && banks.length) {
          let currentBank;
          banks.forEach(bank => {
            if (bank.slug === bankSlug) {
              currentBank = bank;
            }
          });
          return currentBank;
        }
      }
    },
    customers: {
      get(lastSetVal, setVal){
        let currentBank = this.attr('currentBank');
        if (currentBank) {
          Customer.findAll({bankId: currentBank._id}).then(customers => {
            setVal(customers);
          });
        }
      }
    }
  }
});
var appViewModel = new AppMap({});

// Make appState the route's internal can.Map
can.route.map(appViewModel);

// Each element that will be set on the app-state must be preceded by a colon
// Also, set a default value for page (the login page)
can.route('customers/:customerSlug', {page: 'customers'});
can.route('banks/:bankSlug', {page: 'banks'});
can.route(':page');
can.route('', {page: 'navigation'});

// Initialize routing
can.route.ready();

// Render the base application
// Link appState to index.stache
//$('#app').html(index(appViewModel));

$(document.body).append(index_template(appViewModel));
