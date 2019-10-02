{rest, POST,GET,PATCH,DELETE} = require './utilities'

checkAll = ->
	console.clear()
	await DELETE '/todos',{},                        []
	await POST   '/todos',{text:"buy food"},         {id:"1", text:"buy food", done:false}
	await GET    '/todos',{},                      	 [{id:"1", text:"buy food", done:false}]
	await POST   '/todos',{text:"fetch lamps"},      {id:"2", text:"fetch lamps", done:false}
	await POST   '/todos',{text:"walk dog"},         {id:"3", text:"walk dog", done:false}
	await POST   '/todos',{text:"feed cat"},         {id:"4", text:"feed cat", done:false}
	await POST   '/todos',{text:"köp räksmörgåsar"}, {id:"5", text:"köp räksmörgåsar", done:false}
	await GET    '/todos/1',{},                      {id:"1", text:"buy food", done:false}
	await POST   '/todos',{text:'Cut the grass'},    {id:"6", text:"Cut the grass", done:false}
	await GET    '/todos/6',{},                      {id:"6", text:"Cut the grass", done:false}
	await PATCH  '/todos/6',{text:"Klipp gräset",done:true}, {id:"6", text:"Klipp gräset", done:true}
	await PATCH  '/todos/6',{done:false},            {id:"6", text:"Klipp gräset", done:false}
	await PATCH  '/todos/6',{},                      {id:"6", text:"Klipp gräset", done:false}
	await DELETE '/todos/6',{},                      {id:"6", text:"Klipp gräset", done:false}
	await DELETE '/todos/99',{},                     {error:404, message:"id 99 does not exist"}
	await GET    '/todos/99',{},                     {error:404, message:"id 99 does not exist"}
	await PATCH  '/todos/99',{},                     {error:404, message:"id 99 does not exist"}
	console.log rest()

checkAll()
