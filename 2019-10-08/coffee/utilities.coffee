# Prints colors in Chrome Console

okAsserts = ''

showDiff = (a,b) =>

	p = a.length
	for i in _.range a.length
		if a[i] != b[i]
			p = i
			break

	ta = '\x1b[33m' + a.slice 0,p
	tb = '\x1b[33m' + b.slice 0,p
	ta += '\x1b[32m' + a.slice p
	tb += '\x1b[31m' + b.slice p
	ta + '\n' + tb

assert = (a,b,message = '') ->
	sa = JSON.stringify a
	sb = JSON.stringify b
	sa = sa.replace /\\/g,''
	sb = sb.replace /\\/g,''

	if sa == sb 
		okAsserts += '.'
	else
		console.log okAsserts + '\n' + message + '\n' + showDiff sa,sb
		okAsserts = ''

assertReady = -> console.log okAsserts
