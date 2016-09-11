

export let version = function (opts = {}, {
	gitHead:_gitHead = false,
	version:_version = '',
	name:_name = '',
} = {}) {
	let {name = _name, title = name, version:ver = _version, gitHead = _gitHead} = opts
	let gh = ''

	if (gitHead !== false) {
		gh = ` (${gitHead})`
	}

	return `${title} v${ver}${gh}`
}

export let help = function (optsPkg = {}, {
	options:opts = {},
	arguments:args = {},
	forceCommand = null,
	example:exampleStrg = '',
	spaces = 15,
	spacesPrefix = 6,
} = {}) {
	let {bin, name} = optsPkg
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
