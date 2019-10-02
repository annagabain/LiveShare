// Generated by CoffeeScript 2.4.1
var Database, PATH, PORT, _, app, db, express, fs;

fs = require('fs');

_ = require('lodash');

PATH = 'db.txt';

express = require('express');

app = express();

app.use(express.urlencoded({
  extended: false // req.body
}));


// todo = {id:1, text:"Feed the Cat", done:false}
Database = class Database {
  constructor() {
    this.read();
  }

  read() {
    return Object.assign(this, JSON.parse(fs.readFileSync(PATH, 'utf-8')));
  }

  write() {
    return fs.writeFileSync(PATH, JSON.stringify(this));
  }

  add(body) {
    var todo;
    todo = {
      id: ++this.last,
      text: body.text,
      done: false
    };
    this.todos.push(todo);
    this.write();
    return todo;
  }

  clear() {
    this.last = 0;
    this.todos = [];
    this.write();
    return this.todos;
  }

  delete(id) {
    var result;
    result = this.todos.find(function(todo) {
      return todo.id === id;
    });
    this.todos = this.todos.filter(function(todo) {
      return todo.id !== id;
    });
    this.write();
    return result;
  }

  update(id, body) {
    var todo;
    todo = this.todos.find(function(todo) {
      return todo.id === id;
    });
    todo.text = body.text;
    todo.done = JSON.parse(body.done);
    this.write();
    return todo;
  }

  patch(id, body) {
    var todo;
    todo = this.todos.find(function(todo) {
      return todo.id === id;
    });
    todo.text = body.text || todo.text;
    todo.done = JSON.parse(body.done || todo.done);
    this.write();
    return todo;
  }

};

db = new Database();

app.post('/todos', function(req, res) {
  return res.send(db.add(req.body));
});

app.get('/todos', function(req, res) {
  return res.send(db.todos);
});

app.get('/todos/:id', function(req, res) {
  return res.send(db.todos.find(function(todo) {
    return todo.id === parseInt(req.params.id);
  }));
});

app.delete('/todos', function(req, res) {
  return res.send(db.clear());
});

app.delete('/todos/:id', function(req, res) {
  return res.send(db.delete(parseInt(req.params.id)));
});

app.put('/todos/:id', function(req, res) {
  return res.send(db.update(parseInt(req.params.id), req.body));
});

app.patch('/todos/:id', function(req, res) {
  return res.send(db.patch(parseInt(req.params.id), req.body));
});

PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  return console.log(`Server started on port ${PORT}`);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFBLFFBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsRUFBQSxFQUFBLE9BQUEsRUFBQTs7QUFBQSxFQUFBLEdBQUssT0FBQSxDQUFRLElBQVI7O0FBQ0wsQ0FBQSxHQUFJLE9BQUEsQ0FBUSxRQUFSOztBQUNKLElBQUEsR0FBTzs7QUFFUCxPQUFBLEdBQVUsT0FBQSxDQUFRLFNBQVI7O0FBQ1YsR0FBQSxHQUFNLE9BQUEsQ0FBQTs7QUFDTixHQUFHLENBQUMsR0FBSixDQUFRLE9BQU8sQ0FBQyxVQUFSLENBQW1CO0VBQUUsUUFBQSxFQUFVLEtBQVo7QUFBQSxDQUFuQixDQUFSLEVBTkE7Ozs7QUFVTSxXQUFOLE1BQUEsU0FBQTtFQUNDLFdBQWMsQ0FBQSxDQUFBO0lBQU0sSUFBQyxDQUFBLElBQUQsQ0FBQTtFQUFOOztFQUVkLElBQU8sQ0FBQSxDQUFBO1dBQUcsTUFBTSxDQUFDLE1BQVAsQ0FBYyxJQUFkLEVBQWlCLElBQUksQ0FBQyxLQUFMLENBQVcsRUFBRSxDQUFDLFlBQUgsQ0FBZ0IsSUFBaEIsRUFBcUIsT0FBckIsQ0FBWCxDQUFqQjtFQUFIOztFQUNQLEtBQVEsQ0FBQSxDQUFBO1dBQUcsRUFBRSxDQUFDLGFBQUgsQ0FBaUIsSUFBakIsRUFBdUIsSUFBSSxDQUFDLFNBQUwsQ0FBZSxJQUFmLENBQXZCO0VBQUg7O0VBRVIsR0FBTSxDQUFDLElBQUQsQ0FBQTtBQUNMLFFBQUE7SUFBQSxJQUFBLEdBQU87TUFBQyxFQUFBLEVBQUksRUFBRSxJQUFDLENBQUEsSUFBUjtNQUFjLElBQUEsRUFBTSxJQUFJLENBQUMsSUFBekI7TUFBK0IsSUFBQSxFQUFNO0lBQXJDO0lBQ1AsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksSUFBWjtJQUNBLElBQUMs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UyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQXBCLENBQVYsQ0FBVDtBQUFkLENBQXpCOztBQUNBLEdBQUcsQ0FBQyxHQUFKLENBQVcsWUFBWCxFQUF5QixRQUFBLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBQTtTQUFjLEdBQUcsQ0FBQyxJQUFKLENBQVMsRUFBRSxDQUFDLE1BQUgsQ0FBVSxRQUFBLENBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFwQixDQUFWLEVBQW1DLEdBQUcsQ0FBQyxJQUF2QyxDQUFUO0FBQWQsQ0FBekI7O0FBQ0EsR0FBRyxDQUFDLEtBQUosQ0FBVyxZQUFYLEVBQXlCLFFBQUEsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFBO1NBQWMsR0FBRyxDQUFDLElBQUosQ0FBUyxFQUFFLENBQUMsS0FBSCxDQUFVLFFBQUEsQ0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQXBCLENBQVYsRUFBbUMsR0FBRyxDQUFDLElBQXZDLENBQVQ7QUFBZCxDQUF6Qjs7QUFFQSxJQUFBLEdBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFaLElBQW9COztBQUMzQixHQUFHLENBQUMsTUFBSixDQUFXLElBQVgsRUFBaUIsUUFBQSxDQUFBLENBQUE7U0FBRyxPQUFPLENBQUMsR0FBUixDQUFZLENBQUEsdUJBQUEsQ0FBQSxDQUEwQixJQUExQixDQUFBLENBQVo7QUFBSCxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImZzID0gcmVxdWlyZSAnZnMnXHJcbl8gPSByZXF1aXJlICdsb2Rhc2gnXHJcblBBVEggPSAnZGIudHh0J1xyXG5cclxuZXhwcmVzcyA9IHJlcXVpcmUgJ2V4cHJlc3MnXHJcbmFwcCA9IGV4cHJlc3MoKVxyXG5hcHAudXNlIGV4cHJlc3MudXJsZW5jb2RlZCB7IGV4dGVuZGVkOiBmYWxzZSB9ICMgcmVxLmJvZHlcclxuXHJcbiMgdG9kbyA9IHtpZDoxLCB0ZXh0OlwiRmVlZCB0aGUgQ2F0XCIsIGRvbmU6ZmFsc2V9XHJcblxyXG5jbGFzcyBEYXRhYmFzZSBcclxuXHRjb25zdHJ1Y3RvciA6ICgpIC0+IEByZWFkKClcclxuXHJcblx0cmVhZCA6IC0+IE9iamVjdC5hc3NpZ24gQCwgSlNPTi5wYXJzZSBmcy5yZWFkRmlsZVN5bmMgUEFUSCwndXRmLTgnXHJcblx0d3JpdGUgOiAtPiBmcy53cml0ZUZpbGVTeW5jIFBBVEgsIEpTT04uc3RyaW5naWZ5IEBcclxuXHJcblx0YWRkIDogKGJvZHkpIC0+IFxyXG5cdFx0dG9kbyA9IHtpZDogKytAbGFzdCwgdGV4dDogYm9keS50ZXh0LCBkb25lOiBmYWxzZX1cclxuXHRcdEB0b2Rvcy5wdXNoIHRvZG9cclxuXHRcdEB3cml0ZSgpXHJcblx0XHR0b2RvXHJcblxyXG5cdGNsZWFyIDogLT5cclxuXHRcdEBsYXN0ID0gMFxyXG5cdFx0QHRvZG9zID0gW11cclxuXHRcdEB3cml0ZSgpXHJcblx0XHRAdG9kb3NcclxuXHJcblx0ZGVsZXRlIDogKGlkKSAtPlxyXG5cdFx0cmVzdWx0ID0gQHRvZG9zLmZpbmQgKHRvZG8pIC0+IHRvZG8uaWQgPT0gaWRcclxuXHRcdEB0b2RvcyA9IEB0b2Rvcy5maWx0ZXIgKHRvZG8pIC0+IHRvZG8uaWQgIT0gaWRcclxuXHRcdEB3cml0ZSgpXHJcblx0XHRyZXN1bHRcclxuXHJcblx0dXBkYXRlIDogKGlkLGJvZHkpIC0+XHJcblx0XHR0b2RvID0gQHRvZG9zLmZpbmQgKHRvZG8pIC0+IHRvZG8uaWQgPT0gaWRcclxuXHRcdHRvZG8udGV4dCA9IGJvZHkudGV4dFxyXG5cdFx0dG9kby5kb25lID0gSlNPTi5wYXJzZSBib2R5LmRvbmVcclxuXHRcdEB3cml0ZSgpXHJcblx0XHR0b2RvXHJcblxyXG5cdHBhdGNoIDogKGlkLGJvZHkpIC0+XHJcblx0XHR0b2RvID0gQHRvZG9zLmZpbmQgKHRvZG8pIC0+IHRvZG8uaWQgPT0gaWRcclxuXHRcdHRvZG8udGV4dCA9IGJvZHkudGV4dCB8fCB0b2RvLnRleHRcclxuXHRcdHRvZG8uZG9uZSA9IEpTT04ucGFyc2UgYm9keS5kb25lIHx8IHRvZG8uZG9uZVxyXG5cdFx0QHdyaXRlKClcclxuXHRcdHRvZG9cclxuXHJcbmRiID0gbmV3IERhdGFiYXNlKClcclxuXHJcbmFwcC5wb3N0ICAgJy90b2RvcycsICAgICAocmVxLCByZXMpIC0+IHJlcy5zZW5kIGRiLmFkZCByZXEuYm9keVxyXG5hcHAuZ2V0ICAgICcvdG9kb3MnLCAgICAgKHJlcSwgcmVzKSAtPiByZXMuc2VuZCBkYi50b2Rvc1xyXG5hcHAuZ2V0ICAgICcvdG9kb3MvOmlkJywgKHJlcSwgcmVzKSAtPiByZXMuc2VuZCBkYi50b2Rvcy5maW5kICh0b2RvKSAtPiB0b2RvLmlkID09IHBhcnNlSW50IHJlcS5wYXJhbXMuaWRcclxuYXBwLmRlbGV0ZSAnL3RvZG9zJywgICAgIChyZXEsIHJlcykgLT4gcmVzLnNlbmQgZGIuY2xlYXIoKVxyXG5hcHAuZGVsZXRlICcvdG9kb3MvOmlkJywgKHJlcSwgcmVzKSAtPiByZXMuc2VuZCBkYi5kZWxldGUgcGFyc2VJbnQgcmVxLnBhcmFtcy5pZFxyXG5hcHAucHV0ICAgICcvdG9kb3MvOmlkJywgKHJlcSwgcmVzKSAtPiByZXMuc2VuZCBkYi51cGRhdGUgcGFyc2VJbnQocmVxLnBhcmFtcy5pZCksIHJlcS5ib2R5XHJcbmFwcC5wYXRjaCAgJy90b2Rvcy86aWQnLCAocmVxLCByZXMpIC0+IHJlcy5zZW5kIGRiLnBhdGNoICBwYXJzZUludChyZXEucGFyYW1zLmlkKSwgcmVxLmJvZHlcclxuXHJcblBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDBcclxuYXBwLmxpc3RlbiBQT1JULCAtPiBjb25zb2xlLmxvZyBcIlNlcnZlciBzdGFydGVkIG9uIHBvcnQgI3tQT1JUfVwiIl19
//# sourceURL=c:\github\LiveShare\2019-09-26\coffee\index.coffee