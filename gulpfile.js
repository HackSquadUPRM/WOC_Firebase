(function (){
    'use strict';
    
    // Declare our variables
    var buildCss,
        partialCss,
        finCss,
        distCss,
        buildJs,
        finJs,
        minJs,
        distMinJs,
        distJs,
//        controllerJs,
        gulp,
        jshint,
        sass,
        concat,
        uglify,
        rename,
        prefix,
        server,
        source,
        sourcemaps,
        buffer,
        gutil,
        stream,
        moduleTS,
        bundleJS,
        copyDist,
        typeBrowserRef,
        compTS,
        dirTS,
        serveTS,
        pipeTS,
        dirJS,
        serveJS,
        pipeJS,
        compJS,
        appRoot;

    //Instantiate Variables
        // Build CSS
    var buildCss = 'src/sass/*.scss', 
        partialCss = 'src/sass/partials/*',
        // Finished Concat + Minify CS, 
        finCss = 'style.min.css',
        // Distribute CS, 
        distCss = 'app/css',

        // Build J, 
        buildJs = 'src/js/*.js',
        // Finished Concat + Minify J, 
        finJs = 'final.js', 
            minJs = 'final.min.js',
        // Distribute J, 
        distMinJs = 'app/js/final.min.js', 
        distJs = 'app/js/ux', 
//        controllerJs = 'controller/*.js',

        // TypeScript Module Locations
        mainTS = 'src/ts/*.ts',
        moduleTS = 'src/ts/modules/app.module.ts',
        dirTS = 'src/ts/modules/directives/*.ts',
        serveTS = 'src/ts/modules/services/*.ts',
        pipeTS = 'src/ts/modules/pipes/*.ts',
        compTS = 'src/ts/modules/components/*.ts',
        
        // TypeScript Transpilation Locations
        dirJS = 'app/js/modules/directives',
        serveJS = 'app/js/modules/services',
        pipeJS = 'app/js/modules/pipes',
        compJS = 'app/js/modules/components',
        moduleJS = 'app/js/modules',
        mainJS = 'app/js',
        
        // bundle.js name, 
        bundleJS = 'bundle.js',

        // Angular 2 shims location, 
        copyDist = 'app/lib',

        // Application Root, 
        appRoot = "app",
        typeBrowserRef = "node_modules/angular2/typings/browser.d.ts",

        // Include Our Plugin, 
        gulp = require("gulp"),
        source = require('vinyl-source-stream'), 
        sourcemaps = require('gulp-sourcemaps'),
        typescript = require('gulp-typescript'),
        tscConfig = require('./tsconfig.json'),
        buffer = require('vinyl-buffer'),
        uglify = require("gulp-uglify"),
        gutil = require("gulp-util"), 
        stream = require("gulp-streamify"),
        jshint = require('gulp-jshint'), 
        sass = require('gulp-sass'), 
        concat = require('gulp-concat'), 
        uglify = require('gulp-uglify'), 
        rename = require('gulp-rename'), 
        prefix = require('gulp-autoprefixer'), 
        server = require('gulp-server-livereload');

    // Load web-server at localhost:8000
    gulp.task('webserver', function() {
      gulp.src('./')
        .pipe(server({
          livereload: true,
          directoryListing: true,
          open: true
        }));
    });
    
    // Copy Angular 2 shims to dist/lib
    gulp.task('copylibs', function() {
      return gulp
        .src([
          'node_modules/es6-shim/es6-shim.min.js',
          'node_modules/systemjs/dist/system-polyfills.js',
          'node_modules/angular2/bundles/angular2-polyfills.js',
          'node_modules/systemjs/dist/system.src.js',
          'node_modules/rxjs/bundles/Rx.js',
          'node_modules/angular2/bundles/angular2.dev.js'
        ])
        .pipe(gulp.dest(copyDist));
    });

    // Lint Task
    gulp.task('lint', function() {
        return gulp.src([buildJs])
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });

    // Compile Our Sass
    gulp.task('sass', function() {
        return gulp.src([buildCss, partialCss])
            .pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError)
            .pipe(concat(finCss))
            .pipe(prefix({
      browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
    }))
            .pipe(gulp.dest(distCss));
    });

    // Concatenate & Minify JS
    gulp.task('scripts', function() {
        return gulp.src(buildJs)
            .pipe(concat(finJs))
            .pipe(gulp.dest(distJs))
            .pipe(rename(minJs))
            .pipe(uglify())
            .pipe(gulp.dest(distJs));
    });
    
    //*** Typescript tasks for transpilation, sourcemaps, and tsconfig
    
    // All Typescript Files
    gulp.task('typemodule', function () {
      return gulp
        .src([moduleTS, typeBrowserRef])
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(moduleJS));
    });
    
    // All Typescript Components 
    gulp.task('typemain', function () {
      return gulp
        .src([mainTS, typeBrowserRef])
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(mainJS));
    });
    
    // All Typescript Components 
    gulp.task('typecomp', function () {
      return gulp
        .src([compTS, typeBrowserRef])
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(compJS));
    });
    
    // All Typescript Directives
    gulp.task('typedir', function () {
      return gulp
        .src([dirTS, typeBrowserRef])
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dirJS));
    });
    
    // All Typescript Pipes
    gulp.task('typepipe', function () {
      return gulp
        .src([pipeTS, typeBrowserRef])
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(pipeJS));
    });
    
    // All Typescript Services
    gulp.task('typeserve', function () {
      return gulp
        .src([serveTS, typeBrowserRef])
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(serveJS));
    });
    
    // Watch Files For Changes
    gulp.task('watch', function() {
        gulp.watch([buildJs, distMinJs], ['lint', 'scripts']);
        gulp.watch([buildCss, partialCss], ['sass']);
        gulp.watch([compTS, dirTS, pipeTS, serveTS, moduleTS, mainTS], ['typemodule', 'typecomp', 'typedir', 'typepipe', 'typeserve', 'typemain']);
    });

    gulp.task("default", ['lint', 'sass', 'typemodule', 'typemain', 'watch']);

}());