
"use strict";

/* ==========================================================================
   Declarations
   ========================================================================== */

/* Requirements */

let autoprefixer = require('gulp-autoprefixer');
let cheerio = require('gulp-cheerio');
let concat = require('gulp-concat');
let gulp = require('gulp');
let imageop = require('gulp-image-optimization');
let jshint = require('gulp-jshint');
let livereload = require('gulp-livereload');
let modernizr = require('gulp-modernizr');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let sasslint = require('gulp-sass-lint');
let sourcemaps = require('gulp-sourcemaps');
let svgmin = require('gulp-svgmin');
let svgstore = require('gulp-svgstore');
let uglify = require('gulp-uglify');

/* Paths */

let buildDir = 'build';
let sourceDir = 'source';
let paths = {
  scripts: `${sourceDir}/js/**/*.js`,
  styles: `${sourceDir}/scss/**/*.scss`,
  images: [
    `${sourceDir}/img/**/*.png`,
    `${sourceDir}/img/**/*.jpg`,
    `${sourceDir}/img/**/*.jpeg`,
    `${sourceDir}/img/**/*.gif`
  ],
  icons: `${sourceDir}/icons/**/*.svg`,
  templates: 'templates/**/*.ss'
};


/* ==========================================================================
   Tasks
   ========================================================================== */

/* SASS Task */

gulp.task('styles', function() {
  return gulp.src(paths.styles)
    .pipe(sourcemaps.init())
    .pipe(sasslint({ options: { 'config-file': '.sass-lint.yml' } }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write({includeContent: false}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(`${buildDir}/css`))
    .pipe(livereload());
});

/* JS Task */

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(`${buildDir}/js`))
    .pipe(livereload());
});

/* Images Task */

gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest(`${buildDir}/img`))
    .pipe(livereload());
});

/* SVG Sprite Task */

gulp.task('icons', function () {
  return gulp
    .src(paths.icons)
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(cheerio({
      run: function ($, file) {
        $('svg').addClass('hide');
        $('[fill]').removeAttr('fill');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(rename({basename: 'icons'}))
    .pipe(gulp.dest(`${buildDir}/img`))
    .pipe(livereload());
});

/* Template Tasks */

gulp.task('templates', function() {
  return gulp
    .src(paths.templates)
    .pipe(livereload());
});

/* Customize Modernizr Task */

gulp.task('modernizr', function() {
  gulp.src(paths.scripts)
    .pipe(modernizr({
      options: [
        'setClasses',
        'test/css/flexbox',
        'test/touchevents',
        'test/css/animations'
      ]
    }))
    .pipe(uglify())
    .pipe(gulp.dest(`${sourceDir}/js`))
  });


/* ==========================================================================
   Watch & Default Stuff
   ========================================================================== */

/* Watch */

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.icons, ['icons']);
  gulp.watch(paths.templates, ['templates']);
});

/* Default */

gulp.task('default', [
  'watch'
]);
