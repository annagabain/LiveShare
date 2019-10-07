// Generated by CoffeeScript 2.4.1
// Prints colors in Chrome Console
var assert, assertReady, chalkDiff, okAsserts;

okAsserts = '';

chalkDiff = (a, b) => {
  var result;
  result = Diff.diffChars(a, b).map((part) => {
    var s;
    s = '\x1b[33m';
    if (part.added) {
      s = '\x1b[31m';
    }
    if (part.removed) {
      s = '\x1b[32m';
    }
    return s + part.value;
  });
  return result.join('');
};

assert = function(b, a) {
  var sa, sb;
  sa = JSON.stringify(a);
  sb = JSON.stringify(b);
  sa = sa.replace(/\\/g, '');
  sb = sb.replace(/\\/g, '');
  if (sa === sb) {
    return okAsserts += '.';
  } else {
    console.log(okAsserts + '\n' + chalkDiff(sa, sb));
    return okAsserts = '';
  }
};

assertReady = function() {
  return console.log(okAsserts);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHV0aWxpdGllcy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQUEsSUFBQSxNQUFBLEVBQUEsV0FBQSxFQUFBLFNBQUEsRUFBQTs7QUFFQSxTQUFBLEdBQVk7O0FBRVosU0FBQSxHQUFZLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBQSxHQUFBO0FBRVgsTUFBQTtFQUFBLE1BQUEsR0FBUyxJQUFJLENBQUMsU0FBTCxDQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FBbUIsQ0FBQyxHQUFwQixDQUF3QixDQUFDLElBQUQsQ0FBQSxHQUFBO0FBQ2hDLFFBQUE7SUFBQSxDQUFBLEdBQUk7SUFDSixJQUFHLElBQUksQ0FBQyxLQUFSO01BQXFCLENBQUEsR0FBSSxXQUF6Qjs7SUFDQSxJQUFHLElBQUksQ0FBQyxPQUFSO01BQXFCLENBQUEsR0FBSSxXQUF6Qjs7V0FDQSxDQUFBLEdBQUksSUFBSSxDQUFDO0VBSnVCLENBQXhCO1NBS1QsTUFBTSxDQUFDLElBQVAsQ0FBWSxFQUFaO0FBUFc7O0FBU1osTUFBQSxHQUFTLFFBQUEsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFBO0FBQ1IsTUFBQSxFQUFBLEVBQUE7RUFBQSxFQUFBLEdBQUssSUFBSSxDQUFDLFNBQUwsQ0FBZSxDQUFmO0VBQ0wsRUFBQSxHQUFLLElBQUksQ0FBQyxTQUFMLENBQWUsQ0FBZjtFQUNMLEVBQUEsR0FBSyxFQUFFLENBQUMsT0FBSCxDQUFXLEtBQVgsRUFBaUIsRUFBakI7RUFDTCxFQUFBLEdBQUssRUFBRSxDQUFDLE9BQUgsQ0FBVyxLQUFYLEVBQWlCLEVBQWpCO0VBRUwsSUFBRyxFQUFBLEtBQU0sRUFBVDtXQUNDLFNBQUEsSUFBYSxJQURkO0dBQUEsTUFBQTtJQUdDLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBQSxHQUFZLElBQVosR0FBbUIsU0FBQSxDQUFVLEVBQVYsRUFBYSxFQUFiLENBQS9CO1dBQ0EsU0FBQSxHQUFZLEdBSmI7O0FBTlE7O0FBWVQsV0FBQSxHQUFjLFFBQUEsQ0FBQSxDQUFBO1NBQUcsT0FBTyxDQUFDLEdBQVIsQ0FBWSxTQUFaO0FBQUgiLCJzb3VyY2VzQ29udGVudCI6WyIjIFByaW50cyBjb2xvcnMgaW4gQ2hyb21lIENvbnNvbGVcclxuXHJcbm9rQXNzZXJ0cyA9ICcnXHJcblxyXG5jaGFsa0RpZmYgPSAoYSxiKSA9PlxyXG5cclxuXHRyZXN1bHQgPSBEaWZmLmRpZmZDaGFycyhhLGIpLm1hcCAocGFydCkgPT5cclxuXHRcdHMgPSAnXFx4MWJbMzNtJ1xyXG5cdFx0aWYgcGFydC5hZGRlZCAgIHRoZW4gcyA9ICdcXHgxYlszMW0nXHJcblx0XHRpZiBwYXJ0LnJlbW92ZWQgdGhlbiBzID0gJ1xceDFiWzMybSdcclxuXHRcdHMgKyBwYXJ0LnZhbHVlXHJcblx0cmVzdWx0LmpvaW4gJydcclxuXHJcbmFzc2VydCA9IChiLGEpIC0+XHJcblx0c2EgPSBKU09OLnN0cmluZ2lmeSBhXHJcblx0c2IgPSBKU09OLnN0cmluZ2lmeSBiXHJcblx0c2EgPSBzYS5yZXBsYWNlIC9cXFxcL2csJydcclxuXHRzYiA9IHNiLnJlcGxhY2UgL1xcXFwvZywnJ1xyXG5cclxuXHRpZiBzYSA9PSBzYiBcclxuXHRcdG9rQXNzZXJ0cyArPSAnLidcclxuXHRlbHNlXHJcblx0XHRjb25zb2xlLmxvZyBva0Fzc2VydHMgKyAnXFxuJyArIGNoYWxrRGlmZiBzYSxzYlxyXG5cdFx0b2tBc3NlcnRzID0gJydcclxuXHJcbmFzc2VydFJlYWR5ID0gLT4gY29uc29sZS5sb2cgb2tBc3NlcnRzXHJcbiJdfQ==
//# sourceURL=c:\github\LiveShare\2019-10-08\coffee\utilities.coffee