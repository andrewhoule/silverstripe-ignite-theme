
/* ==========================================================================
   Variable Declarations
   ========================================================================== */

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imageop = require('gulp-image-optimization');
    svgstore = require('gulp-svgstore');
    svgmin = require('gulp-svgmin');
    cheerio = require('gulp-cheerio');
    rename = require('gulp-rename');
    modernizr = require('gulp-modernizr');
    sasslint = require('gulp-sass-lint');
    paths = {
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


/* ==========================================================================
   Tasks
   ========================================================================== */

/* Build/Minify CSS from SASS */

gulp.task('styles', function() {
  return sass(paths.styles, { compass: true, sourcemap: true, style: 'compressed' })
    .pipe(sourcemaps.write('maps', {
      includeContent: false,
      sourceRoot: 'source'
    }))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

/* Minify JS */

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(livereload());
});

/* Optimize Images */

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

/* Build and Minify SVG Sprite */

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

/* Customize Modernizr */

gulp.task('modernizr', function() {
  gulp.src(paths.scripts)
    .pipe(modernizr({
      options: [
        'setClasses',
        'test/css/flexbox'
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