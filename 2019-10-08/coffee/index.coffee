{div, h1, renderable, input} = teacup

stack = []

render = renderable () ->
	div style:'font-family:Courier New;font-size:30px', ->
		for item in stack
			h1 item
		input id:'x', type:"text", name:"nr", onkeyup:onkeyup, style:'font-family:Courier New;font-size:30px'

calc = (cmd) ->
	if cmd == '+' then stack.push stack.pop() + stack.pop()
	else stack.push parseFloat cmd

onkeyup = (evt) => 
	if evt.key == 'Enter' 
		calc cmd for cmd in evt.target.value.split ' '				
		evt.target.value = ''
		root.innerHTML = render()
		x.focus()

root.innerHTML = render()
