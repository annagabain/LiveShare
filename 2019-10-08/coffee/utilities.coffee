# Prints colors in Chrome Console

okAsserts = ''

chalkDiff = (a,b,c1,c2,c3) =>

	result = Diff.diffChars(a,b).map (part) =>
		s = "\x1b[3#{c1}m"
		if part.added   then s = "\x1b[3#{c2}m"
		if part.removed then s = "\x1b[3#{c3}m"
		s + part.value
	result.join ''

assert = (b,a,message) ->
	sa = JSON.stringify a
	sb = JSON.stringify b
	sa = sa.replace /\\/g,''
	sb = sb.replace /\\/g,''

	if sa == sb 
		okAsserts += '.'
	else
		console.log okAsserts
		console.log sa
		console.log chalkDiff sa,sb,3,1,2
		console.log sb
		okAsserts = ''

assertReady = -> console.log okAsserts
