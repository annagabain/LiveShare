// Generated by CoffeeScript 2.4.1
var STYLE1, calc, div, exec, h1, input, onkeyup, render, renderable, stack;

({div, h1, renderable, input} = teacup);

STYLE1 = 'font-family:Courier New;font-size:30px';

stack = [];

render = renderable(function() {
  return div({
    style: STYLE1
  }, function() {
    var i, item, len;
    for (i = 0, len = stack.length; i < len; i++) {
      item = stack[i];
      h1(item);
    }
    return input({
      id: 'x',
      type: "text",
      name: "nr",
      onkeyup: onkeyup,
      style: STYLE1
    });
  });
});

calc = function(cmd) {
  var nr;
  if (cmd === '+') {
    return stack.push(stack.pop() + stack.pop());
  } else {
    nr = parseFloat(cmd);
    if (!isNaN(nr)) {
      return stack.push(nr);
    }
  }
};

onkeyup = (evt) => {
  var cmd, i, len, ref;
  if (evt.key === 'Enter') {
    ref = evt.target.value.split(' ');
    for (i = 0, len = ref.length; i < len; i++) {
      cmd = ref[i];
      calc(cmd);
    }
    evt.target.value = '';
    root.innerHTML = render();
    return x.focus();
  }
};

root.innerHTML = render();

exec = function(cmds) {
  var cmd, i, len, ref;
  stack = [];
  ref = cmds.split(' ');
  for (i = 0, len = ref.length; i < len; i++) {
    cmd = ref[i];
    calc(cmd);
  }
  return stack;
};

assert([5], exec('2 3 +'));

assert([7], exec('2 1 4 + +'));

assert([9], exec('4 5 +'));

assert([20], exec('4 5 *'));

assert([0.8], exec('4 5 /'));

assert([-1], exec('4 5 -'));

assert([-23], exec('23 chs'));

assert([0.2], exec('5 1/x'));

assert([0.7071067811865475], exec('45 sin'));

assert([1, 2, 3, 4], exec('1 2 3 4 5 drop'));

assert([1, 2, 4, 3], exec('1 2 3 4 swap'));

assertReady();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFBLE1BQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsVUFBQSxFQUFBOztBQUFBLENBQUEsQ0FBQyxHQUFELEVBQU0sRUFBTixFQUFVLFVBQVYsRUFBc0IsS0FBdEIsQ0FBQSxHQUErQixNQUEvQjs7QUFFQSxNQUFBLEdBQVM7O0FBRVQsS0FBQSxHQUFROztBQUVSLE1BQUEsR0FBUyxVQUFBLENBQVcsUUFBQSxDQUFBLENBQUE7U0FDbkIsR0FBQSxDQUFJO0lBQUEsS0FBQSxFQUFNO0VBQU4sQ0FBSixFQUFrQixRQUFBLENBQUEsQ0FBQTtBQUNqQixRQUFBLENBQUEsRUFBQSxJQUFBLEVBQUE7SUFBQSxLQUFBLHVDQUFBOztNQUNDLEVBQUEsQ0FBRyxJQUFIO0lBREQ7V0FFQSxLQUFBLENBQU07TUFBQSxFQUFBLEVBQUcsR0FBSDtNQUFRLElBQUEsRUFBSyxNQUFiO01BQXFCLElBQUEsRUFBSyxJQUExQjtNQUFnQyxPQUFBLEVBQVEsT0FBeEM7TUFBaUQsS0FBQSxFQUFNO0lBQXZELENBQU47RUFIaUIsQ0FBbEI7QUFEbUIsQ0FBWDs7QUFNVCxJQUFBLEdBQU8sUUFBQSxDQUFDLEdBQUQsQ0FBQTtBQUNOLE1BQUE7RUFBQSxJQUFHLEdBQUEsS0FBTyxHQUFWO1dBQW1CLEtBQUssQ0FBQyxJQUFOLENBQVcsS0FBSyxDQUFDLEdBQU4sQ0FBQSxDQUFBLEdBQWMsS0FBSyxDQUFDLEdBQU4sQ0FBQSxDQUF6QixFQUFuQjtHQUFBLE1BQUE7SUFFQyxFQUFBLEdBQUssVUFBQSxDQUFXLEdBQVg7SUFDTCxJQUFHLENBQUksS0FBQSxDQUFNLEVBQU4sQ0FBUDthQUFxQixLQUFLLENBQUMsSUFBTixDQUFXLEVBQVgsRUFBckI7S0FIRDs7QUFETTs7QUFNUCxPQUFBLEdBQVUsQ0FBQyxHQUFELENBQUEsR0FBQTtBQUNULE1BQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUE7RUFBQSxJQUFHLEdBQUcsQ0FBQyxHQUFKLEtBQVcsT0FBZDtBQUNVO0lBQUEsS0FBQSxxQ0FBQTs7TUFBVCxJQUFBLENBQUssR0FBTDtJQUFTO0lBQ1QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFYLEdBQW1CO0lBQ25CLElBQUksQ0FBQyxTQUFMLEdBQWlCLE1BQUEsQ0FBQTtXQUNqQixDQUFDLENBQUMsS0FBRixDQUFBLEVBSkQ7O0FBRFM7O0FBT1YsSUFBSSxDQUFDLFNBQUwsR0FBaUIsTUFBQSxDQUFBOztBQUVqQixJQUFBLEdBQU8sUUFBQSxDQUFDLElBQUQsQ0FBQTtBQUNOLE1BQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUE7RUFBQSxLQUFBLEdBQVE7QUFDQztFQUFBLEtBQUEscUNBQUE7O0lBQVQsSUFBQSxDQUFLLEdBQUw7RUFBUztTQUNUO0FBSE07O0FBS1AsTUFBQSxDQUFPLENBQUMsQ0FBRCxDQUFQLEVBQVksSUFBQSxDQUFLLE9BQUwsQ0FBWjs7QUFDQSxNQUFBLENBQU8sQ0FBQyxDQUFELENBQVAsRUFBWSxJQUFBLENBQUssV0FBTCxDQUFaOztBQUNBLE1BQUEsQ0FBTyxDQUFDLENBQUQsQ0FBUCxFQUFZLElBQUEsQ0FBSyxPQUFMLENBQVo7O0FBQ0EsTUFBQSxDQUFPLENBQUMsRUFBRCxDQUFQLEVBQWEsSUFBQSxDQUFLLE9BQUwsQ0FBYjs7QUFDQSxNQUFBLENBQU8sQ0FBQyxHQUFELENBQVAsRUFBYyxJQUFBLENBQUssT0FBTCxDQUFkOztBQUNBLE1BQUEsQ0FBTyxDQUFDLENBQUMsQ0FBRixDQUFQLEVBQWEsSUFBQSxDQUFLLE9BQUwsQ0FBYjs7QUFDQSxNQUFBLENBQU8sQ0FBQyxDQUFDLEVBQUYsQ0FBUCxFQUFjLElBQUEsQ0FBSyxRQUFMLENBQWQ7O0FBQ0EsTUFBQSxDQUFPLENBQUMsR0FBRCxDQUFQLEVBQWMsSUFBQSxDQUFLLE9BQUwsQ0FBZDs7QUFDQSxNQUFBLENBQU8sQ0FBQyxrQkFBRCxDQUFQLEVBQTZCLElBQUEsQ0FBSyxRQUFMLENBQTdCOztBQUNBLE1BQUEsQ0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FBUCxFQUFrQixJQUFBLENBQUssZ0JBQUwsQ0FBbEI7O0FBQ0EsTUFBQSxDQUFPLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQUFQLEVBQWtCLElBQUEsQ0FBSyxjQUFMLENBQWxCOztBQUNBLFdBQUEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIntkaXYsIGgxLCByZW5kZXJhYmxlLCBpbnB1dH0gPSB0ZWFjdXBcclxuXHJcblNUWUxFMSA9ICdmb250LWZhbWlseTpDb3VyaWVyIE5ldztmb250LXNpemU6MzBweCdcclxuXHJcbnN0YWNrID0gW11cclxuXHJcbnJlbmRlciA9IHJlbmRlcmFibGUgKCkgLT5cclxuXHRkaXYgc3R5bGU6U1RZTEUxLCAtPlxyXG5cdFx0Zm9yIGl0ZW0gaW4gc3RhY2tcclxuXHRcdFx0aDEgaXRlbVxyXG5cdFx0aW5wdXQgaWQ6J3gnLCB0eXBlOlwidGV4dFwiLCBuYW1lOlwibnJcIiwgb25rZXl1cDpvbmtleXVwLCBzdHlsZTpTVFlMRTFcclxuXHJcbmNhbGMgPSAoY21kKSAtPlxyXG5cdGlmIGNtZCA9PSAnKycgdGhlbiBzdGFjay5wdXNoIHN0YWNrLnBvcCgpICsgc3RhY2sucG9wKClcclxuXHRlbHNlIFxyXG5cdFx0bnIgPSBwYXJzZUZsb2F0IGNtZFxyXG5cdFx0aWYgbm90IGlzTmFOIG5yIHRoZW4gc3RhY2sucHVzaCBuclxyXG5cclxub25rZXl1cCA9IChldnQpID0+XHJcblx0aWYgZXZ0LmtleSA9PSAnRW50ZXInXHJcblx0XHRjYWxjIGNtZCBmb3IgY21kIGluIGV2dC50YXJnZXQudmFsdWUuc3BsaXQgJyAnXHJcblx0XHRldnQudGFyZ2V0LnZhbHVlID0gJydcclxuXHRcdHJvb3QuaW5uZXJIVE1MID0gcmVuZGVyKClcclxuXHRcdHguZm9jdXMoKVxyXG5cclxucm9vdC5pbm5lckhUTUwgPSByZW5kZXIoKVxyXG5cclxuZXhlYyA9IChjbWRzKSAtPlxyXG5cdHN0YWNrID0gW11cclxuXHRjYWxjIGNtZCBmb3IgY21kIGluIGNtZHMuc3BsaXQgJyAnXHJcblx0c3RhY2tcclxuXHJcbmFzc2VydCBbNV0sIGV4ZWMgJzIgMyArJ1xyXG5hc3NlcnQgWzddLCBleGVjICcyIDEgNCArICsnXHJcbmFzc2VydCBbOV0sIGV4ZWMgJzQgNSArJ1xyXG5hc3NlcnQgWzIwXSwgZXhlYyAnNCA1IConXHJcbmFzc2VydCBbMC44XSwgZXhlYyAnNCA1IC8nXHJcbmFzc2VydCBbLTFdLCBleGVjICc0IDUgLSdcclxuYXNzZXJ0IFstMjNdLCBleGVjICcyMyBjaHMnXHJcbmFzc2VydCBbMC4yXSwgZXhlYyAnNSAxL3gnXHJcbmFzc2VydCBbMC43MDcxMDY3ODExODY1NDc1XSwgZXhlYyAnNDUgc2luJ1xyXG5hc3NlcnQgWzEsMiwzLDRdLCBleGVjICcxIDIgMyA0IDUgZHJvcCdcclxuYXNzZXJ0IFsxLDIsNCwzXSwgZXhlYyAnMSAyIDMgNCBzd2FwJ1xyXG5hc3NlcnRSZWFkeSgpXHJcbiJdfQ==
//# sourceURL=c:\github\LiveShare\2019-10-08\coffee\index.coffee