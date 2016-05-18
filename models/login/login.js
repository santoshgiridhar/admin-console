import can from 'can/';
import 'can/map/define/';
import URL from 'utils/urls';

var Model = can.Model.extend({

  findOne: function(params){
    return $.ajax({
      url: URL+'adminmodule/login',
      type: 'POST',
      datatype:'json',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(params)
    })
  }
}
,{});

export default Model;