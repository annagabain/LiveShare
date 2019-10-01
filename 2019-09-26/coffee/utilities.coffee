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

curl.put = (url) => # Monkey Patching PUT as it is missing.
	curl._setUrl url
	curl.setOpt curl.libcurl.option.CUSTOMREQUEST, 'PUT'
	curl._submit()
 
check = (url,body,expect,type) ->
	response = await curl.setBody(body)[type] 'localhost:3000' + url
	assert JSON.parse(response.body), expect

DELETE = ->	check ...arguments, 'delete'
POST =   ->	check ...arguments, 'post'
PUT =    ->	check ...arguments, 'put'
GET =    ->	check ...arguments, 'get'
PATCH =  ->	check ...arguments, 'patch'

module.exports = {assert,rest, DELETE,POST,PUT,GET,PATCH}
