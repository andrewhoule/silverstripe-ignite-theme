
"use strict";

/* ==========================================================================
   Declarations
   ========================================================================== */

/* Requirements */

import autoprefixer from 'gulp-autoprefixer';
import cheerio from 'gulp-cheerio';
import concat from 'gulp-concat';
import gulp from 'gulp';
import imageop from 'gulp-image-optimization';
import jshint from 'gulp-jshint';
import livereload from 'gulp-livereload';
import modernizr from 'gulp-modernizr';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import sasslint from 'gulp-sass-lint';
import sourcemaps from 'gulp-sourcemaps';
import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import uglify from 'gulp-uglify';

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
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sasslint({ options: { 'config-file': '.sass-lint.yml' } }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('maps', {
      includeContent: false
    }))
    .pipe(gulp.dest(`${buildDir}/css`))
    .pipe(livereload());
});

/* JS Task */

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(plumber())
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
  return gulp
    .src(paths.scripts)
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
