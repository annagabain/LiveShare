// Generated by CoffeeScript 2.4.1
var Curl, DELETE, GET, PATCH, POST, PUT, _, assert, chai, check, curl, okAsserts, rest;

chai = require('chai');

_ = require('lodash');

//assert = chai.assert.deepEqual
okAsserts = '';

assert = function(a, b) {
  var ch, diff, i, j, len, sa, sb;
  sa = JSON.stringify(a);
  sb = JSON.stringify(b);
  sa = sa.replace(/\\/g, '');
  sb = sb.replace(/\\/g, '');
  diff = '';
  for (i = j = 0, len = sa.length; j < len; i = ++j) {
    ch = sa[i];
    if (sa[i] === sb[i]) {
      diff += '='; // same character
    } else {
      diff += '!'; // different character
      break;
    }
  }
  if (diff.includes('!')) { // failed assert
    console.log(okAsserts);
    console.log(sa);
    console.log(diff);
    console.log(sb);
    return okAsserts = '';
  } else {
    return okAsserts += '.'; // ok assert
  }
};

rest = function() {
  return okAsserts;
};

Curl = require('curl-request');

curl = new Curl();

curl.put = (url) => { // Monkey Patching PUT as it is missing.
  curl._setUrl(url);
  curl.setOpt(curl.libcurl.option.CUSTOMREQUEST, 'PUT');
  return curl._submit();
};

check = async function(url, body, expect, type) {
  var response;
  response = (await curl.setBody(body)[type]('localhost:3000' + url));
  //console.log type, expect
  return assert(JSON.parse(response.body), expect);
};

DELETE = function() {
  return check(...arguments, 'delete');
};

POST = function() {
  return check(...arguments, 'post');
};

PUT = function() {
  return check(...arguments, 'put');
};

GET = function() {
  return check(...arguments, 'get');
};

PATCH = function() {
  return check(...arguments, 'patch');
};

module.exports = {assert, rest, DELETE, POST, PUT, GET, PATCH};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHV0aWxpdGllcy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBLE1BQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUE7O0FBQUEsSUFBQSxHQUFPLE9BQUEsQ0FBUSxNQUFSOztBQUNQLENBQUEsR0FBSSxPQUFBLENBQVEsUUFBUixFQURKOzs7QUFHQSxTQUFBLEdBQVk7O0FBQ1osTUFBQSxHQUFTLFFBQUEsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFBO0FBQ1IsTUFBQSxFQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLEVBQUEsRUFBQTtFQUFBLEVBQUEsR0FBSyxJQUFJLENBQUMsU0FBTCxDQUFlLENBQWY7RUFDTCxFQUFBLEdBQUssSUFBSSxDQUFDLFNBQUwsQ0FBZSxDQUFmO0VBQ0wsRUFBQSxHQUFLLEVBQUUsQ0FBQyxPQUFILENBQVcsS0FBWCxFQUFpQixFQUFqQjtFQUNMLEVBQUEsR0FBSyxFQUFFLENBQUMsT0FBSCxDQUFXLEtBQVgsRUFBaUIsRUFBakI7RUFDTCxJQUFBLEdBQU87RUFDUCxLQUFBLDRDQUFBOztJQUNDLElBQUcsRUFBRyxDQUFBLENBQUEsQ0FBSCxLQUFPLEVBQUcsQ0FBQSxDQUFBLENBQWI7TUFDQyxJQUFBLElBQVEsSUFEVDtLQUFBLE1BQUE7TUFHQyxJQUFBLElBQVEsSUFBUjtBQUNBLFlBSkQ7O0VBREQ7RUFNQSxJQUFHLElBQUksQ0FBQyxRQUFMLENBQWMsR0FBZCxDQUFIO0lBQ0MsT0FBTyxDQUFDLEdBQVIsQ0FBWSxTQUFaO0lBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxFQUFaO0lBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaO0lBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxFQUFaO1dBQ0EsU0FBQSxHQUFZLEdBTGI7R0FBQSxNQUFBO1dBT0MsU0FBQSxJQUFhLElBUGQ7O0FBWlE7O0FBcUJULElBQUEsR0FBTyxRQUFBLENBQUEsQ0FBQTtTQUFHO0FBQUg7O0FBRVAsSUFBQSxHQUFPLE9BQUEsQ0FBUSxjQUFSOztBQUVQLElBQUEsR0FBTyxJQUFJLElBQUosQ0FBQTs7QUFFUCxJQUFJLENBQUMsR0FBTCxHQUFXLENBQUMsR0FBRCxDQUFBLEdBQUEsRUFBQTtFQUNWLElBQUksQ0FBQyxPQUFMLENBQWEsR0FBYjtFQUNBLElBQUksQ0FBQyxNQUFMLENBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBaEMsRUFBK0MsS0FBL0M7U0FDQSxJQUFJLENBQUMsT0FBTCxDQUFBO0FBSFU7O0FBS1gsS0FBQSxHQUFRLE1BQUEsUUFBQSxDQUFDLEdBQUQsRUFBSyxJQUFMLEVBQVUsTUFBVixFQUFpQixJQUFqQixDQUFBO0FBQ1AsTUFBQTtFQUFBLFFBQUEsR0FBVyxDQUFBLE1BQU0sSUFBSSxDQUFDLE9BQUwsQ0FBYSxJQUFiLENBQW1CLENBQUEsSUFBQSxDQUFuQixDQUF5QixnQkFBQSxHQUFtQixHQUE1QyxDQUFOLEVBQVg7O1NBRUEsTUFBQSxDQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsUUFBUSxDQUFDLElBQXBCLENBQVAsRUFBa0MsTUFBbEM7QUFITzs7QUFLUixNQUFBLEdBQVMsUUFBQSxDQUFBLENBQUE7U0FBRyxLQUFBLENBQU0sR0FBRyxTQUFULEVBQW9CLFFBQXBCO0FBQUg7O0FBQ1QsSUFBQSxHQUFTLFFBQUEsQ0FBQSxDQUFBO1NBQUcsS0FBQSxDQUFNLEdBQUcsU0FBVCxFQUFvQixNQUFwQjtBQUFIOztBQUNULEdBQUEsR0FBUyxRQUFBLENBQUEsQ0FBQTtTQUFHLEtBQUEsQ0FBTSxHQUFHLFNBQVQsRUFBb0IsS0FBcEI7QUFBSDs7QUFDVCxHQUFBLEdBQVMsUUFBQSxDQUFBLENBQUE7U0FBRyxLQUFBLENBQU0sR0FBRyxTQUFULEVBQW9CLEtBQXBCO0FBQUg7O0FBQ1QsS0FBQSxHQUFTLFFBQUEsQ0FBQSxDQUFBO1NBQUcsS0FBQSxDQUFNLEdBQUcsU0FBVCxFQUFvQixPQUFwQjtBQUFIOztBQUVULE1BQU0sQ0FBQyxPQUFQLEdBQWlCLENBQUMsTUFBRCxFQUFRLElBQVIsRUFBYyxNQUFkLEVBQXFCLElBQXJCLEVBQTBCLEdBQTFCLEVBQThCLEdBQTlCLEVBQWtDLEtBQWxDIiwic291cmNlc0NvbnRlbnQiOlsiY2hhaSA9IHJlcXVpcmUgJ2NoYWknXHJcbl8gPSByZXF1aXJlICdsb2Rhc2gnXHJcbiNhc3NlcnQgPSBjaGFpLmFzc2VydC5kZWVwRXF1YWxcclxub2tBc3NlcnRzID0gJydcclxuYXNzZXJ0ID0gKGEsYikgLT5cclxuXHRzYSA9IEpTT04uc3RyaW5naWZ5IGFcclxuXHRzYiA9IEpTT04uc3RyaW5naWZ5IGJcclxuXHRzYSA9IHNhLnJlcGxhY2UgL1xcXFwvZywnJ1xyXG5cdHNiID0gc2IucmVwbGFjZSAvXFxcXC9nLCcnXHJcblx0ZGlmZiA9ICcnXHJcblx0Zm9yIGNoLGkgaW4gc2FcclxuXHRcdGlmIHNhW2ldPT1zYltpXVxyXG5cdFx0XHRkaWZmICs9ICc9JyAjIHNhbWUgY2hhcmFjdGVyXHJcblx0XHRlbHNlIFxyXG5cdFx0XHRkaWZmICs9ICchJyAjIGRpZmZlcmVudCBjaGFyYWN0ZXJcclxuXHRcdFx0YnJlYWtcclxuXHRpZiBkaWZmLmluY2x1ZGVzICchJyAjIGZhaWxlZCBhc3NlcnRcclxuXHRcdGNvbnNvbGUubG9nIG9rQXNzZXJ0c1xyXG5cdFx0Y29uc29sZS5sb2cgc2FcclxuXHRcdGNvbnNvbGUubG9nIGRpZmZcclxuXHRcdGNvbnNvbGUubG9nIHNiXHJcblx0XHRva0Fzc2VydHMgPSAnJ1xyXG5cdGVsc2UgXHJcblx0XHRva0Fzc2VydHMgKz0gJy4nICMgb2sgYXNzZXJ0XHJcblxyXG5yZXN0ID0gLT4gb2tBc3NlcnRzXHJcblxyXG5DdXJsID0gcmVxdWlyZSAnY3VybC1yZXF1ZXN0J1xyXG5cclxuY3VybCA9IG5ldyBDdXJsKClcclxuXHJcbmN1cmwucHV0ID0gKHVybCkgPT4gIyBNb25rZXkgUGF0Y2hpbmcgUFVUIGFzIGl0IGlzIG1pc3NpbmcuXHJcblx0Y3VybC5fc2V0VXJsIHVybFxyXG5cdGN1cmwuc2V0T3B0IGN1cmwubGliY3VybC5vcHRpb24uQ1VTVE9NUkVRVUVTVCwgJ1BVVCdcclxuXHRjdXJsLl9zdWJtaXQoKVxyXG4gXHJcbmNoZWNrID0gKHVybCxib2R5LGV4cGVjdCx0eXBlKSAtPlxyXG5cdHJlc3BvbnNlID0gYXdhaXQgY3VybC5zZXRCb2R5KGJvZHkpW3R5cGVdICdsb2NhbGhvc3Q6MzAwMCcgKyB1cmxcclxuXHQjY29uc29sZS5sb2cgdHlwZSwgZXhwZWN0XHJcblx0YXNzZXJ0IEpTT04ucGFyc2UocmVzcG9uc2UuYm9keSksIGV4cGVjdFxyXG5cclxuREVMRVRFID0gLT5cdGNoZWNrIC4uLmFyZ3VtZW50cywgJ2RlbGV0ZSdcclxuUE9TVCA9ICAgLT5cdGNoZWNrIC4uLmFyZ3VtZW50cywgJ3Bvc3QnXHJcblBVVCA9ICAgIC0+XHRjaGVjayAuLi5hcmd1bWVudHMsICdwdXQnXHJcbkdFVCA9ICAgIC0+XHRjaGVjayAuLi5hcmd1bWVudHMsICdnZXQnXHJcblBBVENIID0gIC0+XHRjaGVjayAuLi5hcmd1bWVudHMsICdwYXRjaCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge2Fzc2VydCxyZXN0LCBERUxFVEUsUE9TVCxQVVQsR0VULFBBVENIfVxyXG4iXX0=
//# sourceURL=c:\github\LiveShare\2019-09-26\coffee\utilities.coffee