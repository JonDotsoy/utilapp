# utilapp
A help dialog generator. To create a dialog help on the terminal.

> ## Install
>
> [![NPM](https://nodei.co/npm/utilapp.png?mini=true)](https://nodei.co/npm/utilapp/)
>
> Install with [npm](https://www.npmjs.com/)
>
> ```bash
> npm i utilapp --save
> ```

## Usage

```js
var utilapp = require('utilapp');
```

### Show version message

```js
var pkg = require('./package.json')
utilapp.varsion(pkg)
```

### Show Help message

```js
var pkg = require('./package.json')
utilapp.help(pkg, {
	arguments: {
		'una-action': 'a description',
	},
	options: {
		'-a, --a-option': 'a description',
	}
})
```


## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/JonDotsoy/utilapp/issues)

## Author

**Jon Dotsoy**

* [github/JonDotsoy](https://github.com/JonDotsoy)
* [twitter/JonDotsoy](http://twitter.com/JonDotsoy)

## License

Copyright © 2016 [Jon Dotsoy](http://jon.soy/)
Licensed under the MIT license.
