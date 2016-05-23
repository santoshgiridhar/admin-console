import can from 'can/';
import 'can/util/fixture/';
import 'can/map/define/';
import URL from 'utils/urls';
import $ from 'jquery';

import './fixture';

var Model = can.Model.extend({
	parseModels: 'sampleData',

//can.fixture.on = false;
  findAll: function(){
  	  //can.fixture.on = true;
    return $.ajax({
      url: '/banks',
      type: 'GET',
      datatype:'json',
      contentType: 'application/json; charset=utf-8'
    });
  }
}, {});

export default Model;
