'use strict';

var

  livereloadport = 35729,
  serverport = 5000,

  debug = true,

  libraryName = 'isis-ui-components',
  libraryTemplatesModule = 'isis.ui.components.templates',

  docTemplatesModule = 'isis.ui.demoApp.templates',

  sourcePaths = {

    docsSourceIndex: 'src/docs/ui_components_docs.html',
    docsApp: 'src/docs/docs_app.js',
    docsScripts: [
      'src/docs/docs_app.js',
      'src/*/docs/*.js'
    ],
    docsTemplates: [
      'src/**/demo.html',
      'src/**/readme.md'
    ],
    docsStyles: [
      'src/docs/styles/*.scss',
      'src/library/*/docs/**/*.scss'
    ],


    libraryModuleScript: 'src/library/isis-ui-components.js',
    libraryScripts: [
      'src/library/**/*.js'
    ],
    libraryTemplates: [
      'src/**/templates/**/*.html'
    ],
    libraryStyles: [
      'src/library/*/styles/*.scss'
    ],
    libraryImages: [
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


// Docs tasks

gulp.task( 'lint-docs', function () {

  console.log( 'Linting docs...' );

  gulp.src( sourcePaths.docsScripts )
    .pipe( jshint() )
    .pipe( jshint.reporter( 'default' ) );

} );

gulp.task( 'browserify-docs', function () {

  console.log( 'Browserifying docs...' );

  if ( debug ) {
    process.env.BROWSERIFYSHIM_DIAGNOSTICS = 1;
  }

  gulp.src( sourcePaths.docsApp, { read: false } )
    .pipe( browserify( {
      insertGlobals: true,
      debug: true
    } ) )
    .on( 'error', console.log )
    .pipe( concat( libraryName + '-docs.js' ) )
    .pipe( gulp.dest( buildPaths.docsRoot ) );

} );

gulp.task( 'compile-docs-templates', function () {

  console.log( 'Compiling docs templates...' );

  gulp.src( sourcePaths.docsTemplates )
    .pipe( templateCache( libraryName + '-doc-templates.js', {
      root: '/',
      module: docTemplatesModule,
      standalone: true
    } ) )
    .pipe( gulp.dest( buildPaths.docsRoot ) );
} );


gulp.task( 'compile-docs',
  [ 'lint-docs', 'browserify-docs', 'compile-docs-templates', 'compile-docs-styles' ],
  function () {

  console.log( 'Compiling docs...' );

  gulp.src( sourcePaths.docsSourceIndex )
    .pipe( rename( libraryName + '-docs.html' ) )
    .pipe( gulp.dest( buildPaths.docsRoot ) );

  gulp.src( sourcePaths.docsStyles )
    .pipe( sass( {
      errLogToConsole: true,
      sourceComments: 'map'
    } ) )
    .pipe( rename( function ( path ) {
      path.dirname = '';
    } ) )
    .pipe( concat( libraryName + '-docs.css' ) )
    .pipe( gulp.dest( buildPaths.docsRoot ) );
} );


gulp.task( 'compile-docs-styles', function () {

  console.log( 'Compiling styles...' );

  gulp.src( sourcePaths.docsStyles )
    // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
    .pipe( sass( {
      errLogToConsole: true,
      sourceComments: 'map'
    } ) )
    .pipe( rename( function ( path ) {
      path.dirname = '';
    } ) )
    .pipe( concat( libraryName + '.css' ) )
    .pipe( gulp.dest( buildPaths.root ) );
} );


// Library tasks

gulp.task( 'lint-library', function () {

  console.log( 'Linting library...' );

  gulp.src( sourcePaths.libraryScripts )
    .pipe( jshint() )
    .pipe( jshint.reporter( 'default' ) );

} );

gulp.task( 'browserify-library', function () {

  console.log( 'Browserifying library...' );

  if ( debug ) {
    process.env.BROWSERIFYSHIM_DIAGNOSTICS = 1;
  }

  gulp.src( sourcePaths.libraryModuleScript, { read: false } )
    .pipe( browserify( {
      insertGlobals: true,
      debug: true
    } ) )
    .on( 'error', console.log )
    .pipe( concat( libraryName + '.js' ) )
    .pipe( gulp.dest( buildPaths.scripts ) );

} );

gulp.task( 'compile-library-templates', function () {

  console.log( 'Compiling templates...' );

  gulp.src( sourcePaths.libraryTemplates )
    .pipe( rename( function ( path ) {
      path.dirname = 'templates';
    } ) )
    .pipe( templateCache( libraryName + '-templates.js', {
      module: libraryTemplatesModule,
      standalone: true,
      root: '/'
    } ) )
    .pipe( gulp.dest( buildPaths.root ) );
} );


gulp.task( 'compile-library-styles', function () {

  console.log( 'Compiling styles...' );

  gulp.src( sourcePaths.libraryStyles )
    // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
    .pipe( sass( {
      errLogToConsole: true,
      sourceComments: 'map'
    } ) )
    .pipe( rename( function ( path ) {
      path.dirname = '';
    } ) )
    .pipe( concat( libraryName + '.css' ) )
    .pipe( gulp.dest( buildPaths.root ) );
} );

gulp.task( 'compile-library-images', function () {

  console.log( 'Compiling images...' );

  gulp.src( sourcePaths.libraryImages )
    .pipe( rename( function ( path ) {
      path.dirname = '';
    } ) )
    .pipe( gulp.dest( buildPaths.images ) );
} );


gulp.task( 'compile-library',
  [ 'lint-library', 'browserify-library', 'compile-library-templates', 'compile-library-styles', 'compile-library-images'],
  function () {
    console.log( 'Compiling scripts...' );
} );


gulp.task( 'compile-all', function ( cb ) {
  runSequence( 'clean-build', [
    'compile-docs', 'compile-library'], cb );
} );


// Server scripts

gulp.task( 'start-server', function () {

  console.log( 'Starting server...' );

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

  console.log( 'Refreshing server...' );

  refresh( lrserver );
} );


gulp.task( 'register-watchers', function ( cb ) {
  gulp.watch( sourcePaths.index, [ 'compile-index', 'refresh-server' ] );

  gulp.watch( sourcePaths.docsSourceIndex, [ 'compile-docs', 'refresh-server' ] );
  gulp.watch( sourcePaths.docsApp, [ 'compile-docs', 'refresh-server' ] );
  gulp.watch( sourcePaths.docsScripts, [ 'compile-docs', 'refresh-server' ] );
  gulp.watch( sourcePaths.docsTemplates, [ 'compile-docs-templates', 'refresh-server' ] );
  gulp.watch( sourcePaths.docsStyles, [ 'compile-docs-styles', 'refresh-server' ] );

  gulp.watch( sourcePaths.libraryModuleScript, [ 'compile-library', 'refresh-server' ] );
  gulp.watch( sourcePaths.libraryScripts, [ 'compile-library', 'refresh-server' ] );
  gulp.watch( sourcePaths.libraryTemplates, [ 'compile-library-scripts', 'refresh-server' ] );
  gulp.watch( sourcePaths.libraryStyles, [ 'compile-library-styles', 'refresh-server' ] );
  gulp.watch( sourcePaths.libraryImages, [ 'compile-library-images', 'refresh-server' ] );

  return cb;
} );

// Dev task
gulp.task( 'dev', [ 'compile' ], function ( cb ) {

  runSequence( 'compile', 'start-server', 'register-watchers', cb );

} );