{div, h1, renderable, input} = teacup

STYLE1 = 'font-family:Courier New;font-size:30px'

stack = []

render = renderable () ->
	div style:STYLE1, ->
		for item in stack
			h1 item
		input id:'x', type:"text", name:"nr", onkeyup:onkeyup, style:STYLE1

calc = (cmd) ->
	if cmd == '+' then stack.push stack.pop() + stack.pop()
	else 
		nr = parseFloat cmd
		if not isNaN nr then stack.push nr

onkeyup = (evt) =>
	if evt.key == 'Enter'
		calc cmd for cmd in evt.target.value.split ' '
		evt.target.value = ''
		root.innerHTML = render()
		x.focus()

root.innerHTML = render()

exec = (cmds) ->
	stack = []
	calc cmd for cmd in cmds.split ' '
	stack

assert [5], exec '2 3 +'
assert [7], exec '2 1 4 + +'
assert [9], exec '4 5 +'
assert [20], exec '4 5 *'
assert [0.8], exec '4 5 /'
assert [-1], exec '4 5 -'
assert [-23], exec '23 chs'
assert [0.2], exec '5 1/x'
assert [0.7071067811865475], exec '45 sin'
assert [1,2,3,4], exec '1 2 3 4 5 drop'
assert [1,2,4,3], exec '1 2 3 4 swap'
assertReady()
