
var utilapp = require('..')
var version = utilapp.version
var help = utilapp.help
var pkg = require('../package.json')


console.log()

console.log(version(pkg))

console.log()

console.log(help(pkg, {
	options: {
		a: "abcc",
		bscc: "sdasd"
	},
	arguments: {
		'absc': 'abc.... ascas.',
		'Lsssc': 'abc.... ascas.',
		'Lsccc': 'abc.... ascas.',
		'Lscs': 'abc.... ascas.',
	}
}))
