[![NPM Version](http://img.shields.io/npm/v/browserify-transform-tools-exclude.svg?style=flat)](https://npmjs.org/package/browserify-transform-tools-exclude)
[![Build Status](http://img.shields.io/travis/royriojas/browserify-transform-tools-exclude.svg?style=flat)](https://travis-ci.org/royriojas/browserify-transform-tools-exclude)

# browserify-transform-tools-exclude
> a helper function to provide the ability to exclude certain files from the transform in a generic way.

## Motivation
[browserify-transform-tools](https://www.npmjs.com/package/browserify-transform-tools) does not offers a way to exclude the transforms from files that matches a given pattern. They do support to exclude certain files that match certain extensions, but that is not enough.

this is a helper function intended to be used with [browserify-transform-tools](https://www.npmjs.com/package/browserify-transform-tools)

## Usage

```javascript
var transformTools = require( 'browserify-transform-tools' );
var transformExclude = require( 'browserify-transform-tools-exclude');

// the `transformExclude` will call the passed callback only if the passed file
// does not matches the excludeRegex option
var transformFn = transformExclude( function (node, transformOptions, done ) {
  // your transform code here
});

module.exports = transformTools.makeFalafelTransform( 'my-awesome-transform', options, transformFn );
```

## Configuration
Wrapping your `transformFn` with this module will add the ability to exclude the transform from
being executed over the files that match the given regex pattern.

### exclude files using the package.json

```javascript
  "nameOfTransform" : {
    // the transform won't be executed over a given file
    // if the path matches any of the regular expressions
    exclude: [
      "/min.js$/",
      "/legacy.js$/",
    ]
  }
```

### exclude files using the configuration object
```javascript
var b = require('browserify')();

var myAwesomeTransform = require('my-awesome-transform').configure({
  exclude: [
    "/min.js$/",
    "/legacy.js$/",
  ]
});

b.transform(myAwesomeTransform);
```

## Changelog

[Changelog](./changelog.md)

## License
MIT
