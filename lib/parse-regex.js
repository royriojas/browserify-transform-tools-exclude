// http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript/3561711#3561711

var typeOf = function ( obj ) {
  return Object.prototype.toString.call( obj ).replace( /^\[object (.+)\]$/, '$1' ).toLowerCase();
};

/**
 * parses a valid regular expression represented as a string into a real Regular Expression
 * @method parseRegExp
 * @param regexAsString {String} that represents a valid regular expression
 * @returns {RegExp}
 */
var parseRegExp = function ( regexAsString ) {

  if ( typeOf( regexAsString ) === 'regexp' ) {
    regexAsString = String( regexAsString );
  }

  if ( typeOf( regexAsString ) !== 'string' ) {
    return null;
  }

  var rx;
  try {
    var matches = regexAsString.match( /(\/?)(.+)\1([a-z]*)/i );
    var flags = matches[ 3 ];

    if ( flags && !/^(?!.*?(.).*?\1)[gmixXsuUAJ]+$/.test( flags ) ) {
      rx = new RegExp( regexAsString );
    } else {
      var expression = matches[ 2 ];
      rx = new RegExp( expression, flags );
    }
  } catch (ex) {
    rx = null;
  }
  return rx;
};

module.exports = parseRegExp;
