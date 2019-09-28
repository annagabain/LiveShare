chai = require 'chai'
assert = chai.assert.deepEqual

####
# This file is making asserts about the API.
####

Curl = require 'curl-request'

curl = new Curl()

curl.put = (url) => # Monkey Patching PUT as it is missing.
	curl._setUrl url
	curl.setOpt curl.libcurl.option.CUSTOMREQUEST, 'PUT'
	curl._submit()
 
check = (type,url,body,expect) ->
	response = await curl.setBody(body)[type] 'localhost:3000' + url
	assert response.body, JSON.stringify expect

DELETE = (url,body,expect) ->	check 'delete',url,body,expect
POST =   (url,body,expect) ->	check 'post',url,body,expect
PUT =    (url,body,expect) ->	check 'put',url,body,expect
GET =    (url,body,expect) ->	check 'get',url,body,expect
PATCH =  (url,body,expect) ->	check 'patch',url,body,expect

############################ This is the specific part

checkAll = ->
	await DELETE '/todos',{},                        []
	await POST   '/todos',{text:"buy food"},         {id:1,text:"buy food",done:false}
	await POST   '/todos',{text:"fetch lamps"},      {id:2,text:"fetch lamps",done:false}
	await POST   '/todos',{text:"walk dog"},         {id:3,text:"walk dog",done:false}
	await POST   '/todos',{text:"feed cat"},         {id:4,text:"feed cat",done:false}
	await POST   '/todos',{text:"köp räksmörgåsar"}, {id:5,text:"köp räksmörgåsar",done:false}
	await GET    '/todos/1',{},                      {id:1,text:"buy food",done:false}
	await POST   '/todos',{text:'Cut the grass'},    {id:6,text:"Cut the grass",done:false}
	await GET    '/todos/6',{},                      {id:6,text:"Cut the grass",done:false}
	await PUT    '/todos',{id:6,text:"Klipp gräset",done:true}, {id:6,text:"Klipp gräset",done:true}
	await PATCH  '/todos',{id:6,done:false},         {id:6,text:"Klipp gräset",done:false}
	await PATCH  '/todos',{id:6},                    {id:6,text:"Klipp gräset",done:false}
	await PUT    '/todos',{id:6,done:true},          {id:6,done:true}
	await DELETE '/todos/6',{},                      {id:6,done:true}
	console.log 'Ready!'
checkAll()

############################
