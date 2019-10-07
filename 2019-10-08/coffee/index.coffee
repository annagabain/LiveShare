{div, h1, renderable, input} = teacup

stack = []

misc = {}
misc['drop'] = -> stack.pop()
misc['swap'] = -> 
	a = stack.pop()
	b = stack.pop()
	stack.push a
	stack.push b

unary = {}
unary['chs'] = (x) -> -x
unary['1/x'] = (x) -> 1/x
unary['sin'] = (x) -> Math.sin x / 180 * Math.PI

binary = {}
binary['+'] = (x,y) -> x+y
binary['*'] = (x,y) -> x*y
binary['-'] = (x,y) -> x-y
binary['/'] = (x,y) -> x/y

render = renderable () ->
	div style:'font-family:Courier New;font-size:30px', ->
		div _.keys(misc).join ' '
		div _.keys(unary).join ' '
		div _.keys(binary).join ' '
		for item in stack
			h1 item
		input id:'x', type:"text", name:"nr", onkeyup:onkeyup, style:'font-family:Courier New;font-size:30px'

op1 = (f) ->
	x = stack.pop()
	stack.push f x

op2 = (f) ->
	x = stack.pop()
	y = stack.pop()
	stack.push f y,x

calc = (cmd) ->
	if cmd in _.keys misc   then return misc[cmd]()
	if cmd in _.keys unary  then return op1 unary[cmd]
	if cmd in _.keys binary then return op2 binary[cmd]
	nr = parseFloat cmd
	if not isNaN nr then stack.push nr

onkeyup = (evt) => 
	if evt.key == 'Enter' 
		if evt.target.value == '' then stack.push _.last stack
		else calc cmd for cmd in evt.target.value.split ' '				
		evt.target.value = ''
		root.innerHTML = render()
		x.focus()

root.innerHTML = render()
