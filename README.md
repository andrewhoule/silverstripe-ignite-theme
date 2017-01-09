Barebones Silverstripe Responsive HTML5/SCSS Theme
====================

## Author
* Andrew Houle
* http://andrewhoule.me

## About
This is a bare essentials HTML5/SCSS/jQuery responsive theme. It's meant as a starter kit, not a full fledged theme. It has some base styles and functionality that are relevant to a Silverstripe 3 site. It includes Gulp tasks for SASS, SVG sprites, image optimization, and live browser reload.

## Giving Credit Where It's Due
* Normalize CSS - http://necolas.github.com/normalize.css/
* Respond JS - https://github.com/scottjehl/Respond/
* Jeet - http://jeet.gs/
* Bourbon - http://bourbon.io/

## Installation
* Download and add to your theme folder. Then rename and point to the new theme.
* If not setup on your local machine, then setup Bower (http://bower.io/) for frontend dependencies. Run 'bower init' at the command line of the theme directory.
* Hook up to app.js, jquery, modernizr, normalize, svg4everybody, and respond via SS requirements or in templates.
* If not setup on your local machine, then setup Gulp (http://gulpjs.com/) for tasks and Node (https://nodejs.org/en/) and NPM (https://www.npmjs.com/) to make Gulp go. Run 'npm install' at the command line of the theme directory.
* At command line from theme directory run 'gulp modernizr' to grab modernizr
* Then run 'gulp' to watch for changes
