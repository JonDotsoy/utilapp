
var utilapp = require('..')
var version = utilapp.version
var help = utilapp.help
var pkg = require('../package.json')


console.log()

console.log(version(pkg))

console.log()

console.log(help(pkg, {
	arguments: {
		'una-action': 'a description',
	},
	options: {
		'-a, --a-option': 'a description',
	},
}))
