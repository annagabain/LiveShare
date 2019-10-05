// Generated by CoffeeScript 2.4.1
var Database, PATH, PORT, app, db, express, last, readFileSync, writeFileSync;

({readFileSync, writeFileSync} = require('fs'));

({last} = require('lodash'));

PATH = 'db.txt';

express = require('express');

app = express();

app.use(express.urlencoded({
  extended: false // req.body
}));

Database = class Database { // todo = {id:"1", text:"Feed the Cat", done:false}
  constructor() {
    this.read();
  }

  read() {
    return Object.assign(this, JSON.parse(readFileSync(PATH, 'utf-8')));
  }

  write() {
    return writeFileSync(PATH, JSON.stringify(this));
  }

  post1(req, res) {
    this.todos.push({
      id: `${++this.last}`,
      text: req.body.text,
      done: false
    });
    this.write();
    return res.send(last(this.todos));
  }

  get(req, res) {
    return res.send(this.todos);
  }

  get1(req, res) {
    var todo;
    todo = this.todos.find(function(todo) {
      return todo.id === req.params.id;
    });
    if (!todo) {
      return this.sendError404(req, res);
    }
    return res.send(todo);
  }

  patch1(req, res) {
    var body, todo;
    body = req.body;
    todo = this.todos.find(function(todo) {
      return todo.id === req.params.id;
    });
    if (!todo) {
      return this.sendError404(req, res);
    }
    if (body.text) {
      todo.text = body.text;
    }
    if (body.done) {
      todo.done = JSON.parse(body.done);
    }
    this.write();
    return res.send(todo);
  }

  delete(req, res) {
    this.last = 0;
    this.todos = [];
    this.write();
    return res.send(this.todos);
  }

  delete1(req, res) {
    var todo;
    todo = this.todos.find(function(todo) {
      return todo.id === req.params.id;
    });
    if (!todo) {
      return this.sendError404(req, res);
    }
    this.todos = this.todos.filter(function(todo) {
      return todo.id !== req.params.id;
    });
    this.write();
    return res.send(todo);
  }

  sendError404(req, res) {
    return res.status(404).send({
      error: 404,
      message: 'Unknown id',
      params: req.params,
      body: req.body
    });
  }

};

db = new Database();

// todo = {id:"1", text:"Feed the Cat", done:false}
app.post('/todos', function(req, res) {
  return db.post1(req, res);
});

app.get('/todos', function(req, res) {
  return db.get(req, res);
});

app.get('/todos/:id', function(req, res) {
  return db.get1(req, res);
});

app.patch('/todos/:id', function(req, res) {
  return db.patch1(req, res);
});

app.delete('/todos/:id', function(req, res) {
  return db.delete1(req, res);
});

app.delete('/todos', function(req, res) {
  return db.delete(req, res);
});

PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  return console.log(`Server started on port ${PORT}`);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFBLFFBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxFQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxZQUFBLEVBQUE7O0FBQUEsQ0FBQSxDQUFDLFlBQUQsRUFBZSxhQUFmLENBQUEsR0FBZ0MsT0FBQSxDQUFRLElBQVIsQ0FBaEM7O0FBQ0EsQ0FBQSxDQUFDLElBQUQsQ0FBQSxHQUFTLE9BQUEsQ0FBUSxRQUFSLENBQVQ7O0FBQ0EsSUFBQSxHQUFPOztBQUVQLE9BQUEsR0FBVSxPQUFBLENBQVEsU0FBUjs7QUFDVixHQUFBLEdBQU0sT0FBQSxDQUFBOztBQUNOLEdBQUcsQ0FBQyxHQUFKLENBQVEsT0FBTyxDQUFDLFVBQVIsQ0FBbUI7RUFBRSxRQUFBLEVBQVUsS0FBWjtBQUFBLENBQW5CLENBQVI7O0FBRU0sV0FBTixNQUFBLFNBQUEsQ0FBQTtFQUNDLFdBQWMsQ0FBQSxDQUFBO0lBQUcsSUFBQyxDQUFBLElBQUQsQ0FBQTtFQUFIOztFQUVkLElBQU8sQ0FBQSxDQUFBO1dBQUcsTUFBTSxDQUFDLE1BQVAsQ0FBYyxJQUFkLEVBQWlCLElBQUksQ0FBQyxLQUFMLENBQVcsWUFBQSxDQUFhLElBQWIsRUFBa0IsT0FBbEIsQ0FBWCxDQUFqQjtFQUFIOztFQUNQLEtBQVEsQ0FBQSxDQUFBO1dBQUcsYUFBQSxDQUFjLElBQWQsRUFBb0IsSUFBSSxDQUFDLFNBQUwsQ0FBZSxJQUFmLENBQXBCO0VBQUg7O0VBRVIsS0FBUSxDQUFDLEdBQUQsRUFBSyxHQUFMLENBQUE7SUFDUCxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWTtNQUFDLEVBQUEsRUFBSSxDQUFBLENBQUEsQ0FBRyxFQUFFLElBQUMsQ0FBQSxJQUFOLENBQUEsQ0FBTDtNQUFtQixJQUFBLEVBQU0sR0FBRyxD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O0FBQUgsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJ7cmVhZEZpbGVTeW5jLCB3cml0ZUZpbGVTeW5jfSA9IHJlcXVpcmUgJ2ZzJ1xyXG57bGFzdH0gPSByZXF1aXJlICdsb2Rhc2gnXHJcblBBVEggPSAnZGIudHh0J1xyXG5cclxuZXhwcmVzcyA9IHJlcXVpcmUgJ2V4cHJlc3MnXHJcbmFwcCA9IGV4cHJlc3MoKVxyXG5hcHAudXNlIGV4cHJlc3MudXJsZW5jb2RlZCB7IGV4dGVuZGVkOiBmYWxzZSB9ICMgcmVxLmJvZHlcclxuXHJcbmNsYXNzIERhdGFiYXNlICAgIyB0b2RvID0ge2lkOlwiMVwiLCB0ZXh0OlwiRmVlZCB0aGUgQ2F0XCIsIGRvbmU6ZmFsc2V9XHJcblx0Y29uc3RydWN0b3IgOiAtPiBAcmVhZCgpXHJcblxyXG5cdHJlYWQgOiAtPiBPYmplY3QuYXNzaWduIEAsIEpTT04ucGFyc2UgcmVhZEZpbGVTeW5jIFBBVEgsJ3V0Zi04J1xyXG5cdHdyaXRlIDogLT4gd3JpdGVGaWxlU3luYyBQQVRILCBKU09OLnN0cmluZ2lmeSBAXHJcblxyXG5cdHBvc3QxIDogKHJlcSxyZXMpIC0+IFxyXG5cdFx0QHRvZG9zLnB1c2gge2lkOiBcIiN7KytAbGFzdH1cIiwgdGV4dDogcmVxLmJvZHkudGV4dCwgZG9uZTogZmFsc2V9XHJcblx0XHRAd3JpdGUoKVxyXG5cdFx0cmVzLnNlbmQgbGFzdCBAdG9kb3NcclxuXHJcblx0Z2V0ICA6IChyZXEscmVzKSAtPiByZXMuc2VuZCBAdG9kb3NcclxuXHRnZXQxIDogKHJlcSxyZXMpIC0+IFxyXG5cdFx0dG9kbyA9IEB0b2Rvcy5maW5kICh0b2RvKSAtPiB0b2RvLmlkID09IHJlcS5wYXJhbXMuaWRcclxuXHRcdGlmIG5vdCB0b2RvIHRoZW4gcmV0dXJuIEBzZW5kRXJyb3I0MDQgcmVxLHJlcyBcclxuXHRcdHJlcy5zZW5kIHRvZG9cclxuXHJcblx0cGF0Y2gxIDogKHJlcSxyZXMpIC0+XHJcblx0XHRib2R5ID0gcmVxLmJvZHlcclxuXHRcdHRvZG8gPSBAdG9kb3MuZmluZCAodG9kbykgLT4gdG9kby5pZCA9PSByZXEucGFyYW1zLmlkXHJcblx0XHRpZiBub3QgdG9kbyB0aGVuIHJldHVybiBAc2VuZEVycm9yNDA0IHJlcSxyZXMgXHJcblx0XHRpZiBib2R5LnRleHQgdGhlbiB0b2RvLnRleHQgPSBib2R5LnRleHRcclxuXHRcdGlmIGJvZHkuZG9uZSB0aGVuIHRvZG8uZG9uZSA9IEpTT04ucGFyc2UgYm9keS5kb25lXHJcblx0XHRAd3JpdGUoKVxyXG5cdFx0cmVzLnNlbmQgdG9kb1xyXG5cclxuXHRkZWxldGUgOiAocmVxLHJlcykgLT5cclxuXHRcdEBsYXN0ID0gMFxyXG5cdFx0QHRvZG9zID0gW11cclxuXHRcdEB3cml0ZSgpXHJcblx0XHRyZXMuc2VuZCBAdG9kb3NcclxuXHJcblx0ZGVsZXRlMSA6IChyZXEscmVzKSAtPlxyXG5cdFx0dG9kbyAgID0gQHRvZG9zLmZpbmQgKHRvZG8pIC0+IHRvZG8uaWQgPT0gcmVxLnBhcmFtcy5pZFxyXG5cdFx0aWYgbm90IHRvZG8gdGhlbiByZXR1cm4gQHNlbmRFcnJvcjQwNCByZXEscmVzIFxyXG5cdFx0QHRvZG9zID0gQHRvZG9zLmZpbHRlciAodG9kbykgLT4gdG9kby5pZCAhPSByZXEucGFyYW1zLmlkXHJcblx0XHRAd3JpdGUoKVxyXG5cdFx0cmVzLnNlbmQgdG9kb1xyXG5cclxuXHRzZW5kRXJyb3I0MDQgOiAocmVxLHJlcykgLT4gcmVzLnN0YXR1cyg0MDQpLnNlbmQoe2Vycm9yOjQwNCwgbWVzc2FnZTonVW5rbm93biBpZCcsIHBhcmFtczpyZXEucGFyYW1zLCBib2R5OnJlcS5ib2R5fSlcclxuXHJcbmRiID0gbmV3IERhdGFiYXNlKClcclxuXHJcbiMgdG9kbyA9IHtpZDpcIjFcIiwgdGV4dDpcIkZlZWQgdGhlIENhdFwiLCBkb25lOmZhbHNlfVxyXG5hcHAucG9zdCAgICcvdG9kb3MnLCAgICAgKHJlcSwgcmVzKSAtPiBkYi5wb3N0MSAgIHJlcSxyZXMgXHJcbmFwcC5nZXQgICAgJy90b2RvcycsICAgICAocmVxLCByZXMpIC0+IGRiLmdldCAgICAgcmVxLHJlcyBcclxuYXBwLmdldCAgICAnL3RvZG9zLzppZCcsIChyZXEsIHJlcykgLT4gZGIuZ2V0MSAgICByZXEscmVzIFxyXG5hcHAucGF0Y2ggICcvdG9kb3MvOmlkJywgKHJlcSwgcmVzKSAtPiBkYi5wYXRjaDEgIHJlcSxyZXMgXHJcbmFwcC5kZWxldGUgJy90b2Rvcy86aWQnLCAocmVxLCByZXMpIC0+IGRiLmRlbGV0ZTEgcmVxLHJlcyBcclxuYXBwLmRlbGV0ZSAnL3RvZG9zJywgICAgIChyZXEsIHJlcykgLT4gZGIuZGVsZXRlICByZXEscmVzIFxyXG5cclxuUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMFxyXG5hcHAubGlzdGVuIFBPUlQsIC0+IGNvbnNvbGUubG9nIFwiU2VydmVyIHN0YXJ0ZWQgb24gcG9ydCAje1BPUlR9XCIiXX0=
//# sourceURL=c:\github\LiveShare\2019-09-26\coffee\index.coffee