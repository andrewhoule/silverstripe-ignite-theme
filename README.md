Barebones Silverstripe Responsive HTML5/SCSS Theme
====================

## Author
* Andrew Houle
* http://andrewhoule.me

## About
This is a bare essentials HTML5/SCSS/jQuery responsive theme. It's meant as a starter kit, not a full fledged theme. It has some base styles and functionality that are relevant to a Silverstripe 3 site.

## Giving Credit Where It's Due
* Normalize CSS - http://necolas.github.com/normalize.css/
* Respond JS - https://github.com/scottjehl/Respond
* Jeet - http://jeet.gs/

## Installation
* Download and add to your theme folder. Then rename and point to the new theme.
* If not setup on your local machine, then setup Bower (http://bower.io/) for frontend dependencies. Update bower.json and run 'bower init' at the command line of the theme directory.
* Hook up to functionality.js, jquery, modernizr and respond via SS requirements or in templates.
* Hook up to normalize and jeet via SASS imports.
* If not setup on your local machine, then setup Gulp (http://gulpjs.com/) for tasks. Update gulpfile.js and package.json then run 'npm install' at the command line of the theme directory.
* At command line from theme directory run gulp modernizr to grab modernizr
* Then run gulp to watch for changes