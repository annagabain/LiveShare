fs = require 'fs'
_ = require 'lodash'
PATH = 'db.txt'

express = require 'express'
app = express()
app.use express.urlencoded { extended: false } # req.body

# Todo:
# id   1..
# text "Feed the Cat"
# done false

class Database 
	constructor : () -> 
		@clear()
		@demo()

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

	demo : ->
		@add text for text in 'buy food|fetch lamps|walk dog|feed cat|köp räksmörgåsar'.split '|'

db = new Database()

app.post '/todos/demo', (req, res) ->
	db.clear()
	db.demo()
	res.send db.todos

app.post '/todos', (req, res) ->
	db.add req.body.text
	res.send _.last db.todos

app.get '/todos', (req, res) -> res.send db.todos

app.get '/todos/:id', (req, res) -> res.send db.todos.find (todo) -> todo.id == parseInt req.params.id

app.put '/todos', (req, res) -> 
	todo = db.todos.find (todo) -> todo.id == parseInt req.body.id
	todo.text = req.body.text
	todo.done = JSON.parse req.body.done
	db.write()
	res.send todo

app.patch '/todos', (req, res) -> 
	todo = db.todos.find (todo) -> todo.id == parseInt req.body.id
	if req.body.text then todo.text = req.body.text
	if req.body.done then todo.done = JSON.parse req.body.done
	db.write()
	res.send todo

app.delete '/todos', (req, res) ->
	db.clear()
	res.send db.todos

app.delete '/todos/:id', (req, res) -> res.send db.delete parseInt req.params.id

PORT = process.env.PORT || 3000
app.listen PORT, -> console.log "Server started on port #{PORT}"