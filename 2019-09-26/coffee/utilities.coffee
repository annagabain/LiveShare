chai = require 'chai'
_ = require 'lodash'
chalk = require 'chalk'
{ diffChars } = require 'diff'

chalkDiff = (a,b) =>
	result = diffChars(a,b).map (part) =>
		v = part.value
		s = chalk.rgb(180, 180, 180) v		
		if part.added then s = chalk.green v
		if part.removed then s = chalk.red v
		s
	chalk.white result.join ''

#assert = chai.assert.deepEqual
assert = (a,b) ->
	sa = JSON.stringify a
	sb = JSON.stringify b
	sa = sa.replace /\\/g,''
	sb = sb.replace /\\/g,''

	if sa == sb 
		process.stderr.write '.'
	else
		console.log '\n' + chalkDiff sa,sb

Curl = require 'curl-request'

curl = new Curl()

check = (url,body,expect,type) ->
	response = await curl.setBody(body)[type] 'localhost:3000' + url
	#console.log type, expect
	#console.log 'body',response.body
	assert JSON.parse(response.body), expect

POST =   ->	check ...arguments, 'post'
GET =    ->	check ...arguments, 'get'
PATCH =  ->	check ...arguments, 'patch'
DELETE = ->	check ...arguments, 'delete'

module.exports = {assert,POST,GET,PATCH,DELETE}
