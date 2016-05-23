import can from 'can/';
import 'can/util/fixture/';
import URL from 'utils/urls';
import _ from 'lodash';

var i = -1,
  items = 10,
  params = null;

/**
 * [getData description]
 * @return {[type]} [description]
 */
function getData() {
  var sample_data = {
    'sampleData': [{
      "_id": "5742f6a58ce657183f6e3b8a",
      "index": 0,
      "name": "Gena Hunt",
      "bankName": "nostrud ullamco",
      "isActive": false,
      "balance": "$2,634.01",
      "gender": "female",
      "address": "545 Hart Street, Berlin, Michigan, 9943",
      "phone": "+1 (860) 578-3502",
      "registered": "2014-05-09T12:51:53 -06:-30"
    }, {
      "_id": "5742f6a58874b7ecc8764447",
      "index": 1,
      "name": "Wiley Norris",
      "bankName": "voluptate commodo",
      "isActive": false,
      "balance": "$1,904.83",
      "gender": "male",
      "address": "888 Ford Street, Dellview, Maryland, 2104",
      "phone": "+1 (959) 519-2444",
      "registered": "2016-02-14T02:23:46 -06:-30"
    }, {
      "_id": "5742f6a5160f1cabcdb98d87",
      "index": 2,
      "name": "Sykes Hampton",
      "bankName": "incididunt ex",
      "isActive": true,
      "balance": "$2,734.66",
      "gender": "male",
      "address": "110 Elliott Walk, Dubois, Kentucky, 5502",
      "phone": "+1 (900) 453-2279",
      "registered": "2015-01-30T04:30:01 -06:-30"
    }, {
      "_id": "5742f6a532fc6644105981e1",
      "index": 3,
      "name": "Serena Conner",
      "bankName": "ea velit",
      "isActive": true,
      "balance": "$2,368.77",
      "gender": "female",
      "address": "442 Union Street, Albrightsville, Hawaii, 9771",
      "phone": "+1 (912) 405-2858",
      "registered": "2016-04-15T05:57:30 -06:-30"
    }, {
      "_id": "5742f6a59aaee51c915db5b4",
      "index": 4,
      "name": "Clay Ramsey",
      "bankName": "anim aliqua",
      "isActive": true,
      "balance": "$2,687.53",
      "gender": "male",
      "address": "870 Waldorf Court, Williston, Palau, 8860",
      "phone": "+1 (998) 473-3888",
      "registered": "2016-03-18T07:13:45 -06:-30"
    }, {
      "_id": "5742f6a55d58c1bd03f8e4f2",
      "index": 5,
      "name": "Richard Underwood",
      "bankName": "proident consequat",
      "isActive": true,
      "balance": "$3,602.70",
      "gender": "male",
      "address": "919 Cook Street, Lodoga, Illinois, 1000",
      "phone": "+1 (809) 585-3685",
      "registered": "2016-03-27T02:49:56 -06:-30"
    }, {
      "_id": "5742f6a58add2af2eb10ba3e",
      "index": 6,
      "name": "Hawkins Pollard",
      "bankName": "eu minim",
      "isActive": false,
      "balance": "$2,320.58",
      "gender": "male",
      "address": "628 Butler Place, Konterra, Colorado, 7145",
      "phone": "+1 (821) 471-2719",
      "registered": "2014-10-11T07:38:39 -06:-30"
    }, {
      "_id": "5742f6a59cadaf26443c2a0a",
      "index": 7,
      "name": "Sherman Sloan",
      "bankName": "excepteur eu",
      "isActive": false,
      "balance": "$2,671.55",
      "gender": "male",
      "address": "241 College Place, Forbestown, Pennsylvania, 2966",
      "phone": "+1 (928) 508-2705",
      "registered": "2015-03-13T01:30:26 -06:-30"
    }, {
      "_id": "5742f6a52256e94126afa388",
      "index": 8,
      "name": "Meyers Guy",
      "bankName": "anim et",
      "isActive": false,
      "balance": "$2,939.92",
      "gender": "male",
      "address": "763 Chester Street, Grandview, California, 2948",
      "phone": "+1 (813) 573-2209",
      "registered": "2014-10-15T01:24:23 -06:-30"
    }, {
      "_id": "5742f6a5f4040a2ae35c3308",
      "index": 9,
      "name": "Susanne Boone",
      "bankName": "consequat elit",
      "isActive": false,
      "balance": "$3,051.59",
      "gender": "female",
      "address": "234 Tapscott Street, Richville, District Of Columbia, 546",
      "phone": "+1 (800) 544-2519",
      "registered": "2014-11-24T06:17:54 -06:-30"
    }]
  };
  return sample_data;
}



var url = '/samplegrid2';
can.fixture('GET ' + url, function() {
    console.log('FIXTURE: ' + url);
    //var params = JSON.parse(options.data);
    console.log(getData());
    return getData();
  })
  //can.fixture.delay = 5000;