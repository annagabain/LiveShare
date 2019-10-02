{readFileSync, writeFileSync} = require 'fs'
{last} = require 'lodash'
PATH = 'db.txt'

express = require 'express'
app = express()
app.use express.urlencoded { extended: false } # req.body

class Database   # todo = {id:"1", text:"Feed the Cat", done:false}
	constructor : -> @read()

	read : -> Object.assign @, JSON.parse readFileSync PATH,'utf-8'
	write : -> writeFileSync PATH, JSON.stringify @

	post1 : (req,res) -> 
		body = req.body
		@todos.push {id: "#{++@last}", text: body.text, done: false}
		@write()
		res.send last @todos

	get  : (req,res) -> res.send @todos
	get1 : (req,res) -> res.send @todos.find (todo) -> todo.id == req.params.id

	patch1 : (req,res) ->
		todo = @todos.find (todo) -> todo.id == req.params.id
		if req.body.text then todo.text = req.body.text
		if req.body.done then todo.done = JSON.parse req.body.done
		@write()
		res.send todo

	delete : (req,res) ->
		@last = 0
		@todos = []
		@write()
		res.send @todos

	delete1 : (req,res) ->
		todo   = @todos.find   (todo) -> todo.id == req.params.id
		@todos = @todos.filter (todo) -> todo.id != req.params.id
		@write()
		res.send todo

db = new Database()

app.post   '/todos',     (req, res) -> db.post1   req,res 
app.get    '/todos',     (req, res) -> db.get     req,res 
app.get    '/todos/:id', (req, res) -> db.get1    req,res 
app.patch  '/todos/:id', (req, res) -> db.patch1  req,res 
app.delete '/todos/:id', (req, res) -> db.delete1 req,res 
app.delete '/todos',     (req, res) -> db.delete  req,res 

PORT = process.env.PORT || 3000
app.listen PORT, -> console.log "Server started on port #{PORT}"