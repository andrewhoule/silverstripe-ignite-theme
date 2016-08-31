
/* ==========================================================================
   Variable Declarations
   ========================================================================== */

var cheerio = require('gulp-cheerio');
var concat = require('gulp-concat');
var gulp = require('gulp');
var imageop = require('gulp-image-optimization');
var jshint = require('gulp-jshint');
var livereload = require('gulp-livereload');
var modernizr = require('gulp-modernizr');
var paths = {
  scripts: 'assets/js/**/*.js',
  styles: 'assets/scss/**/*.scss',
  images: [
    'assets/img/**/*.png',
    'assets/img/**/*.jpg',
    'assets/img/**/*.jpeg',
    'assets/img/**/*.gif'
  ],
  icons: 'assets/icons/**/*.svg',
  templates: 'templates/**/*.ss'
};
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var sasslint = require('gulp-sass-lint');
var sourcemaps = require('gulp-sourcemaps');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
var uglify = require('gulp-uglify');


/* ==========================================================================
   Tasks
   ========================================================================== */

/* Build/Minify CSS from SASS Task */

gulp.task('styles', function() {
  return sass(paths.styles, { compass: true, sourcemap: true, style: 'compressed' })
    .pipe(sourcemaps.write('maps', {
      includeContent: false,
      sourceRoot: 'source'
    }))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

/* Minify JS Task */

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(livereload());
});

/* JS Hint Task */

gulp.task('jshint', function() {
  return gulp
    .src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

/* Optimize Images Task */

gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest('img'))
    .pipe(livereload());
});

/* Build and Minify SVG Sprite Task */

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
    .pipe(gulp.dest('img'))
    .pipe(livereload());
});

/* Template Tasks */

gulp.task('templates', function() {
  return gulp
    .src(paths.templates)
    .pipe(livereload());
});

/* SASS Lint Task */

gulp.task('sasslint', function() {
  return gulp
    .src(paths.styles)
    .pipe(sasslint({ options: { 'config-file': '.sass-lint.yml' } }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError());
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
    .pipe(gulp.dest('assets/js'))
  });


/* ==========================================================================
   Watch & Default Stuff
   ========================================================================== */

/* Watch */

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.styles, ['styles','sasslint']);
  gulp.watch(paths.scripts, ['scripts','jshint']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.icons, ['icons']);
  gulp.watch(paths.templates, ['templates']);
});

/* Default */

gulp.task('default', [
  'watch'
]);