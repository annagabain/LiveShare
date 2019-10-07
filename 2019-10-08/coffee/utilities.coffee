# Prints colors in Chrome Console

okAsserts = ''

chalkDiff = (a,b) =>

	result = Diff.diffChars(a,b).map (part) =>
		s = '\x1b[33m'
		if part.added   then s = '\x1b[31m'
		if part.removed then s = '\x1b[32m'
		s + part.value
	result.join ''

assert = (b,a) ->
	sa = JSON.stringify a
	sb = JSON.stringify b
	sa = sa.replace /\\/g,''
	sb = sb.replace /\\/g,''

	if sa == sb 
		okAsserts += '.'
	else
		console.log okAsserts + '\n' + chalkDiff sa,sb
		okAsserts = ''

assertReady = -> console.log okAsserts
