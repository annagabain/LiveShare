chai = require 'chai'
_ = require 'lodash'
#assert = chai.assert.deepEqual
okAsserts = ''
assert = (a,b) ->
	sa = JSON.stringify a
	sb = JSON.stringify b
	sa = sa.replace /\\/g,''
	sb = sb.replace /\\/g,''
	diff = ''
	for ch,i in sa
		if sa[i]==sb[i]
			diff += '=' # same character
		else 
			diff += '!' # different character
			break
	if diff.includes '!' # failed assert
		console.log okAsserts
		console.log sa
		console.log diff
		console.log sb
		okAsserts = ''
	else 
		okAsserts += '.' # ok assert

rest = -> okAsserts

Curl = require 'curl-request'

curl = new Curl()

check = (url,body,expect,type) ->
	response = await curl.setBody(body)[type] 'localhost:3000' + url
	#console.log type, expect
	assert JSON.parse(response.body), expect

POST =   ->	check ...arguments, 'post'
GET =    ->	check ...arguments, 'get'
PATCH =  ->	check ...arguments, 'patch'
DELETE = ->	check ...arguments, 'delete'

module.exports = {assert,rest, POST,GET,PATCH,DELETE}
