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
	constructor : () -> 

	read : -> Object.assign @, JSON.parse fs.readFileSync PATH,'utf-8'
	write : -> fs.writeFileSync PATH, JSON.stringify @

	add : (text) -> 
	clear : ->
	delete : (id) ->

db = new Database()

app.post '/todos', (req, res) ->
app.get '/todos', (req, res) -> 
app.get '/todos/:id', (req, res) ->
app.put '/todos/:id', (req, res) -> 
app.patch '/todos/:id', (req, res) ->
app.delete '/todos', (req, res) ->
app.delete '/todos/:id', (req, res) -> 

PORT = process.env.PORT || 3000
app.listen PORT, -> console.log "Server started on port #{PORT}"