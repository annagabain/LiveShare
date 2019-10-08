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

exec = (expected, cmds) ->
	stack = []
	calc cmd for cmd in cmds.split ' '
	assert expected, stack, cmds

exec [5], '2 3 +'
exec [7], '2 1 4 + +'
exec [7], '2 1 + 4 +'
exec [9], '4 5 +'
exec [20], '4 5 *'
exec [0.8], '4 5 /'
exec [-1], '4 5 -'
exec [-23], '23 chs'
exec [23], '-23 chs'
exec [0.2], '5 1/x'
exec [25], '5 x^2'
exec [5], '25 sqrt'
exec [0.7071067811865475], '45 sin'
exec [1,2,3,4], '1 2 3 4 5 drop'
exec [1,2,4,3], '1 2 3 4 swap'

exec [1000], '3 10^x'
exec [3], '1000 log'

exec [6.907755278982137], '1000 ln'
exec [999.9999999999998], '6.907755278982137 exp'

exec [9], '3 2 y^x'
exec [8], '2 3 y^x'
exec [2], '-2 abs'
exec [2], '2 abs'
exec [9.42477796076938], 'pi pi pi + +'
exec [9.869604401089358], 'pi pi *'
exec [7.3890560989306495], 'e 2 y^x'
exec [5], '3 4 pyth' # hypothenuse
exec [13], '5 12 pyth' # hypothenuse 25+144 = 169 = 13*13

assertReady()