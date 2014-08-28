'use strict';

var

  livereloadport = 35729,
  serverport = 5000,

  debug = true,

  projectName = 'isis-ui-components',

  sourcePaths = {

    docsSourceIndex: 'utils/build/docs_app_src/ui_components_docs.html',

    docsApp: 'utils/build/docs_app_src/docs_app.js',
//    bundleJS: 'src/isis-ui-components-bundle.js',

    bundleScript: 'src/isis-ui-components-bundle.js',

    scripts: [
      'src/simpleDialog/*.js'
    ],

    docScripts: [
      'utils/build/docs_app_src/**/*.js',
      'src/simpleDialog/docs/demo.js'
    ],

    templates: [
      'src/**/templates/**/*.html'
    ],

    docTemplates: [
      'src/**/demo.html',
      'src/**/readme.md'
    ],

    styles: [
      'src/**/*.scss'
    ],

    docsStyles: [
      'utils/build/docs_app_src/**/*.scss'
    ],

    images: [
      'src/**/*.png',
      'src/**/*.jpg',
      'src/**/*.svg'
    ]
  },

  buildPaths = {

    root: 'dist',
    docsRoot: 'dist/docs',

    scripts: 'dist',
    templates: 'dist/templates',
    styles: 'dist/styles',
    images: 'dist/images'
  },

  gulp = require( 'gulp' ),
  jshint = require( 'gulp-jshint' ),
  browserify = require( 'gulp-browserify' ),
  concat = require( 'gulp-concat' ),
  process = require( 'process' ),
  rename = require( 'gulp-rename' ),
  sass = require( 'gulp-sass' ),
  path = require( 'path' ),
  runSequence = require( 'run-sequence' ),
  clean = require( 'gulp-clean' ),
  templateCache = require( 'gulp-angular-templatecache' ),

  express = require( 'express' ),
  server = express(),
  livereload = require( 'connect-livereload' ),
  refresh = require( 'gulp-livereload' ),
  lrserver = require( 'tiny-lr' )();

// Utility tasks

gulp.task( 'clean-build', function () {
  return gulp.src( buildPaths.root ).pipe( clean() );
} );


gulp.task( 'lint', function () {
  gulp.src( sourcePaths.scripts )
    .pipe( jshint() )
    .pipe( jshint.reporter( 'default' ) );

} );


gulp.task( 'browserify', function () {

  if ( debug ) {
    process.env.BROWSERIFYSHIM_DIAGNOSTICS = 1;
  }

  gulp.src( sourcePaths.scripts, { read: false } )
    .pipe( browserify( {
      insertGlobals: true,
      debug: true
    } ) )
    .on( 'error', console.log )
    .pipe( concat( projectName + '.js' ) )
    .pipe( gulp.dest( buildPaths.scripts ) );

} );


gulp.task( 'lint-doc-scripts', function () {
  gulp.src( sourcePaths.docScripts )
    .pipe( jshint() )
    .pipe( jshint.reporter( 'default' ) );

} );


gulp.task( 'browserify-doc-scripts', function () {

  if ( debug ) {
    process.env.BROWSERIFYSHIM_DIAGNOSTICS = 1;
  }

  gulp.src( sourcePaths.docScripts, { read: false } )
    .pipe( browserify( {
      insertGlobals: true,
      debug: true
    } ) )
    .on( 'error', console.log )
    .pipe( concat( projectName + '-docs.js' ) )
    .pipe( gulp.dest( buildPaths.docsRoot ) );

} );


gulp.task( 'start-server', function () {

  server.use( livereload( { port: livereloadport } ) );
  server.use( express.static( buildPaths.root ) );


  server.get( '/', function ( req, res ) {
    res.sendFile( buildPaths.index, {
      root: buildPaths.root
    } );
  } );

  server.listen( serverport );
  lrserver.listen( livereloadport );

} );


gulp.task( 'refresh-server', function () {
  refresh( lrserver );
} );


// Compile tasks

gulp.task( 'compile-docs', [ 'lint-doc-scripts', 'browserify-doc-scripts', 'compile-doc-templates' ], function () {

  console.log( 'Compiling index...' );

  gulp.src( sourcePaths.docsSourceIndex )
    .pipe( rename( projectName + '-docs.html' ) )
    .pipe( gulp.dest( buildPaths.docsRoot ) );

  gulp.src( sourcePaths.docsStyles )
    .pipe( sass( {
      errLogToConsole: true,
      sourceComments: 'map'
    } ) )
    .pipe( rename( function ( path ) {
      path.dirname = '';
    } ) )
    .pipe( concat( projectName + '-docs.css' ) )
    .pipe( gulp.dest( buildPaths.docsRoot ) );
} );


gulp.task( 'compile-scripts', [ 'lint', 'browserify' ], function () {
  console.log( 'Compiling scripts...' );
} );


gulp.task( 'compile-templates', function () {

  console.log( 'Compiling templates...' );

  gulp.src( sourcePaths.templates )
    .pipe( templateCache( projectName + '-templates.js' ) )
    .pipe( gulp.dest( buildPaths.root ) );
} );


gulp.task( 'compile-doc-templates', function () {

  console.log( 'Compiling doc templates...' );

  gulp.src( sourcePaths.docTemplates )
    .pipe( templateCache( projectName + '-doc-templates.js' ) )
    .pipe( gulp.dest( buildPaths.docsRoot ) );
} );

gulp.task( 'compile-styles', function () {

  console.log( 'Compiling styles...' );

  gulp.src( sourcePaths.styles )
    // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
    .pipe( sass( {
      errLogToConsole: true,
      sourceComments: 'map'
    } ) )
    .pipe( rename( function ( path ) {
      path.dirname = '';
    } ) )
    .pipe( concat( projectName + '.css' ) )
    .pipe( gulp.dest( buildPaths.root ) );
} );


gulp.task( 'compile-images', function () {

  console.log( 'Compiling images...' );

  gulp.src( sourcePaths.images )
    .pipe( rename( function ( path ) {
      path.dirname = '';
    } ) )
    .pipe( gulp.dest( buildPaths.images ) );
} );


gulp.task( 'compile', function ( cb ) {
  runSequence( 'clean-build', [
    'compile-docs', 'compile-scripts', 'compile-templates', 'compile-styles', 'compile-images'], cb );
} );

gulp.task( 'register-watchers', function ( cb ) {
  gulp.watch( sourcePaths.index, [ 'compile-index', 'refresh-server' ] );
  gulp.watch( sourcePaths.scripts, [ 'compile-scripts', 'refresh-server' ] );
  gulp.watch( sourcePaths.templates, [ 'compile-templates', 'refresh-server' ] );
  gulp.watch( sourcePaths.styles, [ 'compile-styles', 'refresh-server' ] );
  gulp.watch( sourcePaths.images, [ 'compile-images', 'refresh-server' ] );
  gulp.watch( sourcePaths.samples, [ 'compile-samples', 'refresh-server' ] );

  return cb;
} );

// Dev task
gulp.task( 'dev', [ 'compile' ], function ( cb ) {

  runSequence( 'compile', 'start-server', 'register-watchers', cb );

} );