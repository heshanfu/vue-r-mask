export default [

	{ setMask: /\d{0,100}/ },
	{ before: "1|", after: "1|"},
	{ before: "12323|", after: "12323|"},
	{ before: "123123123a|", after: "123123123|"},
	{ before: "123123123%|", after: "123123123|"},

	{ setMask: /[01]{0,100}/ },
	{ before: "4|", after: "|"},
	{ before: "a|", after: "|"},
	{ before: "0|", after: "0|"},

	{ setMask: /\w{0,100}/ },
	{ before: "a|", after: "a|"},
	{ before: "avv1|", after: "avv1|"},
	{ before: "avv1@|", after: "avv1|"},
	{ before: "avv1-|", after: "avv1|"},

	{ setMask: /[a-zA-Z]{0,100}/ },
	{ before: "1|", after: "|"},
	{ before: "asdd|", after: "asdd|"},
	{ before: "asdd1|", after: "asdd|"},
	{ before: "asdd!|", after: "asdd|"},

	{ setMask: /[0-2]{1}\d{1}:[0-5]{1}\d{1}/ },
	{ before: "__1|:__", after: "__:1|_"},
	{ before: "__:11|_", after: "__:11|"},
	{ before: "__:4|1", after: "__:4|1"},
	{ before: "2|11:11", after: "2|1:11"},
	{ before: "21:8|11", after: "21:|11"},
	{ before: "9|21:11", after: "|21:11"},
	{ before: "21a|:11", after: "21:|11"},
	{ before: "21:1s|1", after: "21:1|1"},
	{ before: "2s|1:11", after: "2|1:11"},
	{ before: "21:11@|", after: "21:11|"},

	{ setMask: /\d{2}/ },
	{ before: "__1|", after: "__|"},
	{ before: "1|__", after: "1|_"},
	{ before: ":8080|", after: "80|"},
	{ before: "|_", after: "|__"},
	{ before: "1a|2", after: "1|2"},

	{ setMask:  /\d{2}-\d{2}/ },
	{ before: "12|34", after: "12|-34"},
	{ before: "121|-34", after: "12-1|3"},
	{ before: "1a|2-13", after: "1|2-13"},
	{ before: "__|__", after: "__|-__"},
	{ before: "|", after: "|__-__"},
	{ before: "aaaaaaaaaaa|", after: "|__-__"},
	{ before: "_1|_-__", after: "_1|-__"},

	{ setMask:  /\d{2}\/\d{2}\/\d{2,4}/ },
	{ before: "__/__/__1|", after: "__/__/__1|"},
	{ before: "123456789|", after: "12/34/5678|"},
	{ before: "12/34/567|", after: "12/34/567|"},
	{ before: "12/34/56|", after: "12/34/56|"},
	{ before: "12/34/5|", after: "12/34/5|_"},

	{ setMask:  /\+1 \(\d{3}\) \d{4}-\d{2}/ },
	{ before: "123456789|", after: "+1 (234) 5678-9|_"},
	{ before: "123456789123|", after: "+1 (234) 5678-91|"},
	{ before: "+1 (234) 5678|91", after: "+1 (234) 5678|-91"},
	{ before: "+11| (234) 5678-91", after: "+1 (1|23) 4567-89"},
	{ before: "+1 (123) 45672|-89", after: "+1 (123) 4567-2|8"},
	{ before: "|1 (123) 4567-28", after: "|+1 (123) 4567-28"},
	{ before: "+1 (123|4567-28", after: "+1 (123|) 4567-28"},
	{ before: "123456789012|", after: "+1 (234) 5678-90|"},
]

