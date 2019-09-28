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

############################ This is the specific part

checkAll = ->
	await check 'delete','/todos',{},[]
	await check 'post',  '/todos/demo',{}, [{id:1,text:"buy food",done:false},{id:2,text:"fetch lamps",done:false},{id:3,text:"walk dog",done:false},{id:4,text:"feed cat",done:false},{id:5,text:"köp räksmörgåsar",done:false}]
	await check 'get',   '/todos/1', {}, {id:1,text:"buy food",done:false}
	await check 'post',  '/todos', {text:'Cut the grass'}, {id:6,text:"Cut the grass",done:false}
	await check 'get',   '/todos/6', {}, {id:6,text:"Cut the grass",done:false}
	await check 'put',   '/todos', {id:6,text:"Klipp gräset",done:true}, {id:6,text:"Klipp gräset",done:true}
	await check 'patch', '/todos', {id:6,done:false}, {id:6,text:"Klipp gräset",done:false}
	await check 'patch', '/todos', {id:6}, {id:6,text:"Klipp gräset",done:false}
	await check 'put',   '/todos', {id:6,done:true}, {id:6,done:true}
	console.log 'Ready!'
checkAll()

############################
