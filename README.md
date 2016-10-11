# utilapp
A help dialog generator. To create a dialog help on the terminal.

> ## Install
> [![NPM](https://nodei.co/npm/utilapp.png?mini=true)](https://nodei.co/npm/utilapp/)
> 
> 
>
> Install with [npm](https://www.npmjs.com/)
>
> ```bash
> npm i utilapp --save
> ```

## Usage
Require the 'utilapp' module by client script.

```js
var utilapp = require('utilapp');
```

### Show version message
It's used for show the version according to the package.

```js
// Requiere the package file.
var pkg = require('./package.json')

utilapp.varsion(pkg) // v0.0.0
```

### Show Help message
When using the 'app help' command. It show a dialog with all help information.

```js
// Requiere the package file.
var pkg = require('./package.json')

utilapp.help(pkg, {
	arguments: {
		'action-name': 'description of action',
	},
	options: {
		'-a, --option-name': 'description of options',
	}
})
```

## Running tests

1. **Step 1**: install all dependencies.
2. **Step 2**: run `npm test` script.

```sh
$ npm i -d && npm test
```

### Testing with [Docker][docker] *(Optional)*
Using [Docker][docker]...
> 😱 Sorry, We love Docker but this is not finished today. Open a [new issue][] if you require more information.
> 
> — @JonDotsoy

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/JonDotsoy/utilapp/issues)


## Author
#### Jon Dotsoy

* [github/JonDotsoy](https://github.com/JonDotsoy)
* [twitter/JonDotsoy](http://twitter.com/JonDotsoy)

## License
Copyright © 2016 [Jon Dotsoy](http://jon.soy/)
Licensed under the MIT license.


[docker]: http://docker.io/ "BUILD, SHIP, RUN Docker is the world’s leading software containerization platform"
[new issue]: https://github.com/JonDotsoy/utilapp/issues/new "New Issue"
