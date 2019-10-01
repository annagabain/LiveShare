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

module.exports = {assert,rest}
