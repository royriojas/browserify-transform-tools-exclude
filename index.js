var matchAny = require( './lib/match-any' );

module.exports = function ( fnWrapped ) {
  return function ( strOrNode, transformOptions, done ) {
    var file = transformOptions.file;

    var configData = transformOptions.configData || { };
    var config = configData.config || { };
    var exclude = config.exclude || [];

    if ( exclude.length > 0 && matchAny( file, exclude ) ) {
      done && done( null, strOrNode );
      return;
    }

    fnWrapped( strOrNode, transformOptions, done );
  };
};
