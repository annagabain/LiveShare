{div, h1, renderable, input} = teacup

STYLE = 'font-family:Courier New;font-size:30px'

data = """
12	Batteri
65	Bensin 
64	Bestick
43	Blöjor
52	Brandlarm
52	Chifonet
41	Cykelgrejer
42	Cykelgrejer
22	Cykellampor
22	Cykellås
65	Cykelolja
21	Dammsugarpåsar
36	Dämpare
61	Diverse
12	Elmätare
13	Elprylar, små
32	Etiketter
22	Ficklampor
24	Fickplunta
45	Fotvård
32	Glasögonfodral
14	Glödlampor
16	Glödlampor
15	Glödlampor, stora
54	Glögglas
11	Gruppschema
21	Gummiband
11	Häftapparat
55	Handdukar
44	Hårvård
36	IKEA-delar
63	Kåsor
11	Klammer
13	Klister
12	Laddare
33	Lås
13	Märkpennor
26	Möss
33	Nycklar
44	Ögonvård
44	Öronvård
21	Pappersnäsdukar
13	Pennor
63	Plastflaskor
62	Plastpåsar
35	Plugg
13	Proppar
65	Putsgrejer
46	Rakgrejer
51	Remmar
56	Skovård
31	Skruvar
35	Skruvar
51	Snören
34	Specialverktyg
26	Streckkodläsare
66	Strykjärn
52	Svinto
53	Sygrejer
32	Tändstickor
46	Tandvård
23	Tape
11	Tätningslist
25	Toagrejer
21	Tvättklämmor
26	USB-grejer
26	Wattmätare
"""

db = {}
for row in data.split '\n'
	[box,item] = row.split '\t'
	db[box] = db[box] || []
	db[box].push item

render = renderable ->
	input onkeyup:onkeyup, style:STYLE
	div id:'lst', style:STYLE

onkeyup = (evt) => showData evt.target.value

showData = (keyword) ->
	result = []
	for box of db
		for word in db[box]
			if word.toLowerCase().includes keyword then result.push word + ' ' + box
	result.sort()
	lst.innerHTML = result.join '<br>'

root.innerHTML = render()
showData ''
