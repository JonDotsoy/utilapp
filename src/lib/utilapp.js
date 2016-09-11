
/**
 * Generator Version.
 *
 * @example
 * pkg = { name: 'MyApp', version: '0.0.1', gitHead: '34badc' }
 * 
 * version(pkg) // "MyApp v0.0.1 (34badc)"
 *
 * @param {Object}          [pkg={}]             Object Pkg default
 * @param {Object}          [opt={}]             Optional default values
 * @param {String|Boolean}  [opt.gitHead=false]  Git head on package by default
 * @param {String}          [opt.version]        Version on package by default
 * @param {String}          [opt.name]           Name of package
 */
export let version = function (pkg = {}, {
	gitHead:_gitHead = false,
	version:_version = '',
	name:_name = '',
} = {}) {
	let {
		name = _name,
		title = name,
		version:ver = _version,
		gitHead = _gitHead
	} = pkg
	let gh = '' // Git HEAD

	if (gitHead !== false) {
		gh = ` (${gitHead})`
	}

	return `${title} v${ver}${gh}`
}

/**
 * Help dialog. Generate a dialog element,
 */
export let help = function (pkg = {}, {
	options:opts = {},
	arguments:args = {},
	forceCommand = null,
	example:exampleStrg = '',
	spaces = 15,
	spacesPrefix = 6,
} = {}) {
	let {bin, name} = pkg
	let command, usage, example, strArgs = [], strOpts = []

	if (bin !== undefined && forceCommand === null) {
		if (typeof(bin) === 'string') {
			command = name
		} else {
			let [optsCommand] = Object.keys(bin)
			command = optsCommand
		}
	} else if ( forceCommand === null ) {
		command = forceCommand
	}

	if (command === undefined) {
		return null
	} else {
		usage =   `Usage: ${command} [options] [arguments]`
		example = `       ${exampleStrg}`

		for (let optionTitle in opts) {
			let option = opts[optionTitle]
			let intoSpaces = 0

			intoSpaces = spaces - optionTitle.length 

			strOpts.push(`${' '.repeat(spacesPrefix)}${optionTitle}${' '.repeat(intoSpaces)}${option}`)
		}

		for (let argumentTitle in args) {
			let argument = args[argumentTitle]
			let intoSpaces = 0

			intoSpaces = spaces - argumentTitle.length

			strArgs.push(`${' '.repeat(spacesPrefix)}${argumentTitle}${' '.repeat(intoSpaces)}${argument}`)
		}

		return [
			usage,
			example,
			'',
			'Options:',
			strOpts.join('\n'),
			'',
			'Arguments',
			strArgs.join('\n'),
			'',
		].join('\n')
	}
}
