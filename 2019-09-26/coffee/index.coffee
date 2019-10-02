{readFileSync, writeFileSync} = require 'fs'
{last} = require 'lodash'

express = require 'express'
app = express()
app.use express.urlencoded { extended: false } # req.body

class Database   # todo = {id:"1", text:"Feed the Cat", done:false}
	constructor : (@path) -> @read()

	read : -> Object.assign @, JSON.parse readFileSync @path,'utf-8'
	write : -> writeFileSync @path, JSON.stringify @

	add : (body) -> 
		@todos.push {id: "#{++@last}", text: body.text, done: false}
		@write()
		last @todos

	clear : ->
		@last = 0
		@todos = []
		@write()
		@todos

	delete : (id) ->
		todo = @todos.find (todo) -> todo.id == id
		@todos = @todos.filter (todo) -> todo.id != id
		@write()
		todo

	patch : (id,body) ->
		todo = @todos.find (todo) -> todo.id == id
		if body.text then todo.text = body.text
		if body.done then todo.done = JSON.parse body.done
		@write()
		todo

db = new Database 'db.txt'

app.post   '/todos',     (req, res) -> res.send db.add req.body
app.get    '/todos',     (req, res) -> res.send db.todos
app.get    '/todos/:id', (req, res) -> res.send db.todos.find (todo) -> todo.id == req.params.id
app.patch  '/todos/:id', (req, res) -> res.send db.patch  req.params.id, req.body
app.delete '/todos/:id', (req, res) -> res.send db.delete req.params.id
app.delete '/todos',     (req, res) -> res.send db.clear()

PORT = process.env.PORT || 3000
app.listen PORT, -> console.log "Server started on port #{PORT}"