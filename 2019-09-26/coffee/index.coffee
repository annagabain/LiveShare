fs = require 'fs'
_ = require 'lodash'
PATH = 'db.txt'

express = require 'express'
app = express()
app.use express.urlencoded { extended: false } # req.body

# todo = {id:1, text:"Feed the Cat", done:false}

class Database 
	constructor : () -> @read()

	read : -> Object.assign @, JSON.parse fs.readFileSync PATH,'utf-8'
	write : -> fs.writeFileSync PATH, JSON.stringify @

	add : (body) -> 
		todo = {id: ++@last, text: body.text, done: false}
		@todos.push todo
		@write()
		todo

	clear : ->
		@last = 0
		@todos = []
		@write()
		@todos

	delete : (id) ->
		result = @todos.find (todo) -> todo.id == id
		@todos = @todos.filter (todo) -> todo.id != id
		@write()
		result

	update : (id,body) ->
		todo = @todos.find (todo) -> todo.id == id
		todo.text = body.text
		todo.done = JSON.parse body.done
		@write()
		todo

	patch : (id,body) ->
		todo = @todos.find (todo) -> todo.id == id
		todo.text = body.text || todo.text
		todo.done = JSON.parse body.done || todo.done
		@write()
		todo

db = new Database()

app.post   '/todos',     (req, res) -> res.send db.add req.body
app.get    '/todos',     (req, res) -> res.send db.todos
app.get    '/todos/:id', (req, res) -> res.send db.todos.find (todo) -> todo.id == parseInt req.params.id
app.delete '/todos',     (req, res) -> res.send db.clear()
app.delete '/todos/:id', (req, res) -> res.send db.delete parseInt req.params.id
app.put    '/todos/:id', (req, res) -> res.send db.update parseInt(req.params.id), req.body
app.patch  '/todos/:id', (req, res) -> res.send db.patch  parseInt(req.params.id), req.body

PORT = process.env.PORT || 3000
app.listen PORT, -> console.log "Server started on port #{PORT}"