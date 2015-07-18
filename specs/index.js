describe( 'browserify-transform-tools-exclude', function () {
  describe( 'when config contains a list of regex', function () {
    it( 'should skip executing the transform when the file path matches one of the patterns', function () {
      var transformExclude = require( '../' );
      var me = this;
      var spy = me.sandbox.spy();
      var callback = me.sandbox.spy();

      var fn = transformExclude( function ( /*nodeOrString, transformOptions, done*/ ) {
        spy();
      } );

      var cfg = {
        exclude: [
          '/some\/fake/',
          '/another\/module/'
        ]
      };

      fn( {}, {
        file: 'some/fake/path.js',
        configData: {
          config: cfg
        }
      }, callback );

      expect( spy ).to.not.have.been.called;
      expect( callback ).to.have.been.called;

    } );

    it( 'should not skip executing the transform when the file path does not match one of the patterns', function () {
      var transformExclude = require( '../' );
      var me = this;
      var spy = me.sandbox.spy();
      var callback = me.sandbox.spy();

      var fn = transformExclude( function ( nodeOrString, transformOptions, done ) {
        spy();
        done();
      } );

      var cfg = {
        exclude: [
          '/some\/fake/',
          '/another\/module/'
        ]
      };

      fn( {}, {
        file: 'some/not-found/path.js',
        configData: {
          config: cfg
        }
      }, callback );

      expect( spy ).to.have.been.called;
      expect( callback ).to.have.been.called;

    } );

    it( 'should not skip executing the transform if not config exists', function () {
      var transformExclude = require( '../' );
      var me = this;
      var spy = me.sandbox.spy();
      var callback = me.sandbox.spy();

      var fn = transformExclude( function ( nodeOrString, transformOptions, done ) {
        spy();
        done();
      } );

      fn( {}, {
        file: 'some/fake/path.js',
        configData: {

        }
      }, callback );

      expect( spy ).to.have.been.called;
      expect( callback ).to.have.been.called;

    } );

  } );
} );
