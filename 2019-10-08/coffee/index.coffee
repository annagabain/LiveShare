{div, h1, renderable, input} = teacup

stack = []

par0 = {}
par1 = {}
par2 = {}

par0['drop'] = -> stack.pop()
par0['pi']   = -> stack.push Math.PI
par0['e']    = -> stack.push Math.E
par0['swap'] = -> stack.push stack.pop(), stack.pop() 

par1['abs']  = (x) -> Math.abs x
par1['x^2']  = (x) -> x * x
par1['10^x'] = (x) -> 10 ** x
par1['log']  = (x) -> Math.log10 x
par1['exp']  = (x) -> Math.exp x
par1['ln']   = (x) -> Math.log x
par1['sqrt'] = (x) -> Math.sqrt x
par1['chs']  = (x) -> -x
par1['1/x']  = (x) -> 1/x
par1['sin']  = (x) -> Math.sin x / 180 * Math.PI

par2['+']    = (x,y) -> y + x
par2['*']    = (x,y) -> y * x
par2['-']    = (x,y) -> y - x
par2['/']    = (x,y) -> y / x
par2['y^x']  = (x,y) -> y ** x
par2['pyth'] = (x,y) -> Math.sqrt x * x + y * y

render = renderable ->
	div style:'font-family:Courier New;font-size:30px', ->
		div _.keys(par0).join ' '
		div _.keys(par1).join ' '
		div _.keys(par2).join ' '
		for item in stack
			h1 item
		input id:'x', type:"text", name:"nr", onkeyup:onkeyup, style:'font-family:Courier New;font-size:30px'

calc = (cmd) ->
	if cmd in _.keys par0 then par0[cmd]()
	else if cmd in _.keys par1 then stack.push par1[cmd] stack.pop()
	else if cmd in _.keys par2 then stack.push par2[cmd] stack.pop(), stack.pop()
	else
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

exec = (expected, cmds) ->
	calc cmd for cmd in cmds.split ' '
	assert expected, stack, cmds
	stack = []

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