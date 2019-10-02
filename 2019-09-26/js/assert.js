// Generated by CoffeeScript 2.4.1
var DELETE, GET, PATCH, POST, checkAll, rest;

({rest, POST, GET, PATCH, DELETE} = require('./utilities'));

checkAll = async function() {
  console.clear();
  await DELETE('/todos', {}, []);
  await POST('/todos', {
    text: "buy food"
  }, {
    id: "1",
    text: "buy food",
    done: false
  });
  await GET('/todos', {}, [
    {
      id: "1",
      text: "buy food",
      done: false
    }
  ]);
  await POST('/todos', {
    text: "fetch lamps"
  }, {
    id: "2",
    text: "fetch lamps",
    done: false
  });
  await POST('/todos', {
    text: "walk dog"
  }, {
    id: "3",
    text: "walk dog",
    done: false
  });
  await POST('/todos', {
    text: "feed cat"
  }, {
    id: "4",
    text: "feed cat",
    done: false
  });
  await POST('/todos', {
    text: "köp räksmörgåsar"
  }, {
    id: "5",
    text: "köp räksmörgåsar",
    done: false
  });
  await GET('/todos/1', {}, {
    id: "1",
    text: "buy food",
    done: false
  });
  await POST('/todos', {
    text: 'Cut the grass'
  }, {
    id: "6",
    text: "Cut the grass",
    done: false
  });
  await GET('/todos/6', {}, {
    id: "6",
    text: "Cut the grass",
    done: false
  });
  await PATCH('/todos/6', {
    text: "Klipp gräset",
    done: true
  }, {
    id: "6",
    text: "Klipp gräset",
    done: true
  });
  await PATCH('/todos/6', {
    done: false
  }, {
    id: "6",
    text: "Klipp gräset",
    done: false
  });
  await PATCH('/todos/6', {}, {
    id: "6",
    text: "Klipp gräset",
    done: false
  });
  await DELETE('/todos/6', {}, {
    id: "6",
    text: "Klipp gräset",
    done: false
  });
  return console.log(rest());
};

checkAll();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXGFzc2VydC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLFFBQUEsRUFBQTs7QUFBQSxDQUFBLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBWSxHQUFaLEVBQWdCLEtBQWhCLEVBQXNCLE1BQXRCLENBQUEsR0FBZ0MsT0FBQSxDQUFRLGFBQVIsQ0FBaEM7O0FBRUEsUUFBQSxHQUFXLE1BQUEsUUFBQSxDQUFBLENBQUE7RUFDVixPQUFPLENBQUMsS0FBUixDQUFBO0VBQ0EsTUFBTSxNQUFBLENBQU8sUUFBUCxFQUFnQixDQUFBLENBQWhCLEVBQTJDLEVBQTNDO0VBQ04sTUFBTSxJQUFBLENBQU8sUUFBUCxFQUFnQjtJQUFDLElBQUEsRUFBSztFQUFOLENBQWhCLEVBQTJDO0lBQUMsRUFBQSxFQUFHLEdBQUo7SUFBUSxJQUFBLEVBQUssVUFBYjtJQUF3QixJQUFBLEVBQUs7RUFBN0IsQ0FBM0M7RUFDTixNQUFNLEdBQUEsQ0FBTyxRQUFQLEVBQWdCLENBQUEsQ0FBaEIsRUFBMkM7SUFBQztNQUFDLEVBQUEsRUFBRyxHQUFKO01BQVEsSUFBQSxFQUFLLFVBQWI7TUFBd0IsSUFBQSxFQUFLO0lBQTdCLENBQUQ7R0FBM0M7RUFDTixNQUFNLElBQUEsQ0FBTyxRQUFQLEVBQWdCO0lBQUMsSUFBQSxFQUFLO0VBQU4sQ0FBaEIsRUFBMkM7SUFBQyxFQUFBLEVBQUcsR0FBSjtJQUFRLElBQUEsRUFBSyxhQUFiO0lBQTJCLElBQUEsRUFBSztFQUFoQyxDQUEzQztFQUNOLE1BQU0sSUFBQSxDQUFPLFFBQVAsRUFBZ0I7SUFBQyxJQUFBLEVBQUs7RUFBTixDQUFoQixFQUEyQztJQUFDLEVBQUEsRUFBRyxHQUFKO0lBQVEsSUFBQSxFQUFLLFVBQWI7SUFBd0IsSUFBQSxFQUFLO0VBQTdCLENBQTNDO0VBQ04sTUFBTSxJQUFBLENBQU8sUUFBUCxFQUFnQjtJQUFDLElBQUEsRUFBSztFQUFOLENBQWhCLEVBQTJDO0lBQUMsRUFBQSxFQUFHLEdBQUo7SUFBUSxJQUFBLEVBQUssVUFBYjtJQUF3QixJQUFBLEVBQUs7RUFBN0IsQ0FBM0M7RUFDTixNQUFNLElBQUEsQ0FBTyxRQUFQLEVBQWdCO0lBQUMsSUFBQSxFQUFLO0VBQU4sQ0FBaEIsRUFBMkM7SUFBQyxFQUFBLEVBQUcsR0FBSjtJQUFRLElBQUEsRUFBSyxrQkFBYjtJQUFnQyxJQUFBLEVBQUs7RUFBckMsQ0FBM0M7RUFDTixNQUFNLEdBQUEsQ0FBTyxVQUFQLEVBQWtCLENBQUEsQ0FBbEIsRUFBMkM7SUFBQyxFQUFBLEVBQUcsR0FBSjtJQUFRLElBQUEsRUFBSyxVQUFiO0lBQXdCLElBQUEsRUFBSztFQUE3QixDQUEzQztFQUNOLE1BQU0sSUFBQSxDQUFPLFFBQVAsRUFBZ0I7SUFBQyxJQUFBLEVBQUs7RUFBTixDQUFoQixFQUEyQztJQUFDLEVBQUEsRUFBRyxHQUFKO0lBQVEsSUFBQSxFQUFLLGVBQWI7SUFBNkIsSUFBQSxFQUFLO0VBQWxDLENBQTNDO0VBQ04sTUFBTSxHQUFBLENBQU8sVUFBUCxFQUFrQixDQUFBLENBQWxCLEVBQTJDO0lBQUMsRUFBQSxFQUFHLEdBQUo7SUFBUSxJQUFBLEVBQUssZUFBYjtJQUE2QixJQUFBLEVBQUs7RUFBbEMsQ0FBM0M7RUFDTixNQUFNLEtBQUEsQ0FBTyxVQUFQLEVBQWtCO0lBQUMsSUFBQSxFQUFLLGNBQU47SUFBcUIsSUFBQSxFQUFLO0VBQTFCLENBQWxCLEVBQW1EO0lBQUMsRUFBQSxFQUFHLEdBQUo7SUFBUSxJQUFBLEVBQUssY0FBYjtJQUE0QixJQUFBLEVBQUs7RUFBakMsQ0FBbkQ7RUFDTixNQUFNLEtBQUEsQ0FBTyxVQUFQLEVBQWtCO0lBQUMsSUFBQSxFQUFLO0VBQU4sQ0FBbEIsRUFBMkM7SUFBQyxFQUFBLEVBQUcsR0FBSjtJQUFRLElBQUEsRUFBSyxjQUFiO0lBQTRCLElBQUEsRUFBSztFQUFqQyxDQUEzQztFQUNOLE1BQU0sS0FBQSxDQUFPLFVBQVAsRUFBa0IsQ0FBQSxDQUFsQixFQUEyQztJQUFDLEVBQUEsRUFBRyxHQUFKO0lBQVEsSUFBQSxFQUFLLGNBQWI7SUFBNEIsSUFBQSxFQUFLO0VBQWpDLENBQTNDO0VBQ04sTUFBTSxNQUFBLENBQU8sVUFBUCxFQUFrQixDQUFBLENBQWxCLEVBQTJDO0lBQUMsRUFBQSxFQUFHLEdBQUo7SUFBUSxJQUFBLEVBQUssY0FBYjtJQUE0QixJQUFBLEVBQUs7RUFBakMsQ0FBM0M7U0FDTixPQUFPLENBQUMsR0FBUixDQUFZLElBQUEsQ0FBQSxDQUFaO0FBaEJVOztBQWtCWCxRQUFBLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJ7cmVzdCwgUE9TVCxHRVQsUEFUQ0gsREVMRVRFfSA9IHJlcXVpcmUgJy4vdXRpbGl0aWVzJ1xyXG5cclxuY2hlY2tBbGwgPSAtPlxyXG5cdGNvbnNvbGUuY2xlYXIoKVxyXG5cdGF3YWl0IERFTEVURSAnL3RvZG9zJyx7fSwgICAgICAgICAgICAgICAgICAgICAgICBbXVxyXG5cdGF3YWl0IFBPU1QgICAnL3RvZG9zJyx7dGV4dDpcImJ1eSBmb29kXCJ9LCAgICAgICAgIHtpZDpcIjFcIix0ZXh0OlwiYnV5IGZvb2RcIixkb25lOmZhbHNlfVxyXG5cdGF3YWl0IEdFVCAgICAnL3RvZG9zJyx7fSwgICAgICAgICAgICAgICAgICAgICAgXHQgW3tpZDpcIjFcIix0ZXh0OlwiYnV5IGZvb2RcIixkb25lOmZhbHNlfV1cclxuXHRhd2FpdCBQT1NUICAgJy90b2Rvcycse3RleHQ6XCJmZXRjaCBsYW1wc1wifSwgICAgICB7aWQ6XCIyXCIsdGV4dDpcImZldGNoIGxhbXBzXCIsZG9uZTpmYWxzZX1cclxuXHRhd2FpdCBQT1NUICAgJy90b2Rvcycse3RleHQ6XCJ3YWxrIGRvZ1wifSwgICAgICAgICB7aWQ6XCIzXCIsdGV4dDpcIndhbGsgZG9nXCIsZG9uZTpmYWxzZX1cclxuXHRhd2FpdCBQT1NUICAgJy90b2Rvcycse3RleHQ6XCJmZWVkIGNhdFwifSwgICAgICAgICB7aWQ6XCI0XCIsdGV4dDpcImZlZWQgY2F0XCIsZG9uZTpmYWxzZX1cclxuXHRhd2FpdCBQT1NUICAgJy90b2Rvcycse3RleHQ6XCJrw7ZwIHLDpGtzbcO2cmfDpXNhclwifSwge2lkOlwiNVwiLHRleHQ6XCJrw7ZwIHLDpGtzbcO2cmfDpXNhclwiLGRvbmU6ZmFsc2V9XHJcblx0YXdhaXQgR0VUICAgICcvdG9kb3MvMScse30sICAgICAgICAgICAgICAgICAgICAgIHtpZDpcIjFcIix0ZXh0OlwiYnV5IGZvb2RcIixkb25lOmZhbHNlfVxyXG5cdGF3YWl0IFBPU1QgICAnL3RvZG9zJyx7dGV4dDonQ3V0IHRoZSBncmFzcyd9LCAgICB7aWQ6XCI2XCIsdGV4dDpcIkN1dCB0aGUgZ3Jhc3NcIixkb25lOmZhbHNlfVxyXG5cdGF3YWl0IEdFVCAgICAnL3RvZG9zLzYnLHt9LCAgICAgICAgICAgICAgICAgICAgICB7aWQ6XCI2XCIsdGV4dDpcIkN1dCB0aGUgZ3Jhc3NcIixkb25lOmZhbHNlfVxyXG5cdGF3YWl0IFBBVENIICAnL3RvZG9zLzYnLHt0ZXh0OlwiS2xpcHAgZ3LDpHNldFwiLGRvbmU6dHJ1ZX0sIHtpZDpcIjZcIix0ZXh0OlwiS2xpcHAgZ3LDpHNldFwiLGRvbmU6dHJ1ZX1cclxuXHRhd2FpdCBQQVRDSCAgJy90b2Rvcy82Jyx7ZG9uZTpmYWxzZX0sICAgICAgICAgICAge2lkOlwiNlwiLHRleHQ6XCJLbGlwcCBncsOkc2V0XCIsZG9uZTpmYWxzZX1cclxuXHRhd2FpdCBQQVRDSCAgJy90b2Rvcy82Jyx7fSwgICAgICAgICAgICAgICAgICAgICAge2lkOlwiNlwiLHRleHQ6XCJLbGlwcCBncsOkc2V0XCIsZG9uZTpmYWxzZX1cclxuXHRhd2FpdCBERUxFVEUgJy90b2Rvcy82Jyx7fSwgICAgICAgICAgICAgICAgICAgICAge2lkOlwiNlwiLHRleHQ6XCJLbGlwcCBncsOkc2V0XCIsZG9uZTpmYWxzZX1cclxuXHRjb25zb2xlLmxvZyByZXN0KClcclxuXHJcbmNoZWNrQWxsKClcclxuIl19
//# sourceURL=c:\github\LiveShare\2019-09-26\coffee\assert.coffee