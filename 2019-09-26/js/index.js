// Generated by CoffeeScript 2.4.1
var Database, PATH, PORT, _, app, express, fs;

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
  constructor() {}

  read() {
    return Object.assign(this, JSON.parse(fs.readFileSync(PATH, 'utf-8')));
  }

  write() {
    return fs.writeFileSync(PATH, JSON.stringify(this));
  }

};

app.post('/todos', function(req, res) {});

app.get('/todos', function(req, res) {});

app.delete('/todos', function(req, res) {});

app.get('/todos/:id', function(req, res) {});

app.put('/todos/:id', function(req, res) {});

app.patch('/todos/:id', function(req, res) {});

app.delete('/todos/:id', function(req, res) {});

PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  return console.log(`Server started on port ${PORT}`);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFBLFFBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBOztBQUFBLEVBQUEsR0FBSyxPQUFBLENBQVEsSUFBUjs7QUFDTCxDQUFBLEdBQUksT0FBQSxDQUFRLFFBQVI7O0FBQ0osSUFBQSxHQUFPOztBQUVQLE9BQUEsR0FBVSxPQUFBLENBQVEsU0FBUjs7QUFDVixHQUFBLEdBQU0sT0FBQSxDQUFBOztBQUNOLEdBQUcsQ0FBQyxHQUFKLENBQVEsT0FBTyxDQUFDLFVBQVIsQ0FBbUI7RUFBRSxRQUFBLEVBQVUsS0FBWjtBQUFBLENBQW5CLENBQVIsRUFOQTs7OztBQVVNLFdBQU4sTUFBQSxTQUFBO0VBQ0MsV0FBYyxDQUFBLENBQUEsRUFBQTs7RUFDZCxJQUFPLENBQUEsQ0FBQTtXQUFHLE1BQU0sQ0FBQyxNQUFQLENBQWMsSUFBZCxFQUFpQixJQUFJLENBQUMsS0FBTCxDQUFXLEVBQUUsQ0FBQyxZQUFILENBQWdCLElBQWhCLEVBQXFCLE9BQXJCLENBQVgsQ0FBakI7RUFBSDs7RUFDUCxLQUFRLENBQUEsQ0FBQTtXQUFHLEVBQUUsQ0FBQyxhQUFILENBQWlCLElBQWpCLEVBQXVCLElBQUksQ0FBQyxTQUFMLENBQWUsSUFBZixDQUF2QjtFQUFIOztBQUhUOztBQUtBLEdBQUcsQ0FBQyxJQUFKLENBQVcsUUFBWCxFQUF5QixRQUFBLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBQSxFQUFBLENBQXpCOztBQUNBLEdBQUcsQ0FBQyxHQUFKLENBQVcsUUFBWCxFQUF5QixRQUFBLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBQSxFQUFBLENBQXpCOztBQUNBLEdBQUcsQ0FBQyxNQUFKLENBQVcsUUFBWCxFQUF5QixRQUFBLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBQSxFQUFBLENBQXpCOztBQUNBLEdBQUcsQ0FBQyxHQUFKLENBQVcsWUFBWCxFQUF5QixRQUFBLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBQSxFQUFBLENBQXpCOztBQUNBLEdBQUcsQ0FBQyxHQUFKLENBQVcsWUFBWCxFQUF5QixRQUFBLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBQSxFQUFBLENBQXpCOztBQUNBLEdBQUcsQ0FBQyxLQUFKLENBQVcsWUFBWCxFQUF5QixRQUFBLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBQSxFQUFBLENBQXpCOztBQUNBLEdBQUcsQ0FBQyxNQUFKLENBQVcsWUFBWCxFQUF5QixRQUFBLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBQSxFQUFBLENBQXpCOztBQUVBLElBQUEsR0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQVosSUFBb0I7O0FBQzNCLEdBQUcsQ0FBQyxNQUFKLENBQVcsSUFBWCxFQUFpQixRQUFBLENBQUEsQ0FBQTtTQUFHLE9BQU8sQ0FBQyxHQUFSLENBQVksQ0FBQSx1QkFBQSxDQUFBLENBQTBCLElBQTFCLENBQUEsQ0FBWjtBQUFILENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiZnMgPSByZXF1aXJlICdmcydcclxuXyA9IHJlcXVpcmUgJ2xvZGFzaCdcclxuUEFUSCA9ICdkYi50eHQnXHJcblxyXG5leHByZXNzID0gcmVxdWlyZSAnZXhwcmVzcydcclxuYXBwID0gZXhwcmVzcygpXHJcbmFwcC51c2UgZXhwcmVzcy51cmxlbmNvZGVkIHsgZXh0ZW5kZWQ6IGZhbHNlIH0gIyByZXEuYm9keVxyXG5cclxuIyB0b2RvID0ge2lkOjEsIHRleHQ6XCJGZWVkIHRoZSBDYXRcIiwgZG9uZTpmYWxzZX1cclxuXHJcbmNsYXNzIERhdGFiYXNlIFxyXG5cdGNvbnN0cnVjdG9yIDogKCkgLT4gXHJcblx0cmVhZCA6IC0+IE9iamVjdC5hc3NpZ24gQCwgSlNPTi5wYXJzZSBmcy5yZWFkRmlsZVN5bmMgUEFUSCwndXRmLTgnXHJcblx0d3JpdGUgOiAtPiBmcy53cml0ZUZpbGVTeW5jIFBBVEgsIEpTT04uc3RyaW5naWZ5IEBcclxuXHJcbmFwcC5wb3N0ICAgJy90b2RvcycsICAgICAocmVxLCByZXMpIC0+XHJcbmFwcC5nZXQgICAgJy90b2RvcycsICAgICAocmVxLCByZXMpIC0+IFxyXG5hcHAuZGVsZXRlICcvdG9kb3MnLCAgICAgKHJlcSwgcmVzKSAtPlxyXG5hcHAuZ2V0ICAgICcvdG9kb3MvOmlkJywgKHJlcSwgcmVzKSAtPlxyXG5hcHAucHV0ICAgICcvdG9kb3MvOmlkJywgKHJlcSwgcmVzKSAtPiBcclxuYXBwLnBhdGNoICAnL3RvZG9zLzppZCcsIChyZXEsIHJlcykgLT5cclxuYXBwLmRlbGV0ZSAnL3RvZG9zLzppZCcsIChyZXEsIHJlcykgLT4gXHJcblxyXG5QT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwXHJcbmFwcC5saXN0ZW4gUE9SVCwgLT4gY29uc29sZS5sb2cgXCJTZXJ2ZXIgc3RhcnRlZCBvbiBwb3J0ICN7UE9SVH1cIiJdfQ==
//# sourceURL=c:\github\LiveShare\2019-09-26\coffee\index.coffee