fs = require 'fs'
_ = require 'lodash'
PATH = 'db.txt'

express = require 'express'
app = express()
app.use express.urlencoded { extended: false } # req.body

# todo:
#   id   1
#   text "Feed the Cat"
#   done false

class Database 
	constructor : () -> @read()

	read : -> Object.assign @, JSON.parse fs.readFileSync PATH,'utf-8'
	write : -> fs.writeFileSync PATH, JSON.stringify @

	add : (text) -> 
		@todos.push {id: ++@last, text: text, done: false}
		@write()

	clear : () ->
		@last = 0
		@todos = []
		@write()

	delete : (id) ->
		result = @todos.find (todo) -> todo.id == id
		@todos = @todos.filter (todo) -> todo.id != id
		@write()
		result

db = new Database()

app.post '/todos', (req, res) ->
	db.add req.body.text
	res.send _.last db.todos

app.get '/todos', (req, res) -> res.send db.todos

app.get '/todos/:id', (req, res) -> res.send db.todos.find (todo) -> todo.id == parseInt req.params.id

app.put '/todos/:id', (req, res) -> 
	todo = db.todos.find (todo) -> todo.id == parseInt req.params.id
	todo.text = req.body.text
	todo.done = JSON.parse req.body.done
	db.write()
	res.send todo

app.patch '/todos/:id', (req, res) ->
	todo = db.todos.find (todo) -> todo.id == parseInt req.params.id
	todo.text = req.body.text || todo.text
	todo.done = JSON.parse req.body.done || todo.done
	db.write()
	res.send todo

app.delete '/todos', (req, res) ->
	db.clear()
	res.send db.todos

app.delete '/todos/:id', (req, res) -> res.send db.delete parseInt req.params.id

PORT = process.env.PORT || 3000
app.listen PORT, -> console.log "Server started on port #{PORT}"