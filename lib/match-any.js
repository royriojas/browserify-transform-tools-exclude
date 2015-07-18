var parseRegExp = require( './parse-regex' );

var matchAny = function ( text, regexes ) {
  regexes = regexes || [];
  for (var i = 0, len = regexes.length; i < len; i++) {
    var currentRegex = parseRegExp( regexes[ i ] );
    if ( currentRegex ) {
      return !!text.match( currentRegex );
    }
  }
  return false;
};

module.exports = matchAny;
