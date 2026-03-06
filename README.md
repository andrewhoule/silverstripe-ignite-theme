Starter Silverstripe HTML/PostCSS/Webpack Tooling Base
====================

## Author
* Andrew Houle
* https://craftandfunction.com

## About
This is a bare essentials HTML/PostCSS/Webpack tooling base. It's meant as a starter kit, and a base to your tooling workflow, but not a full fledged theme. It has some base styles and functionality that are relevant to a Silverstripe site. It includes webpack configuration tasks for PostCSS, Babel, and BrowserSync.

## Installation
* Download and add to your theme folder. Then rename and point to the new theme.
* If not already setup on globally on your local machine, then setup Node (https://nodejs.org/en/) and NPM (https://www.npmjs.com/). Run 'npm install' at the command line of the theme directory to add all the necessary packages.
* Go into webpack.dev.babel.js and update the local server info.
* Run 'npm start' at the command line to watch with webpack and to open a testing server.

## DDEV
This project includes a DDEV setup for local Silverstripe 6 development.

### Prerequisites
* Install DDEV and Docker.

### First-time setup
* `ddev start`
* `ddev composer install`
* `ddev exec vendor/bin/sake dev/build flush=all`
* Run `nvm use`, then `npm i`, then `npm run build`

### Run locally
* App URL: `https://ignite-ss.ddev.site`
* CMS URL: `https://ignite-ss.ddev.site/admin`

### Frontend Development
* Run `nvm use` to get on the correct version of Node
* If first time, run `npm i` to get all the frontend dependencies
* Run `npm start` to listen for changes and open dev server

### Deployment/Production
* Should run `npm run build` on production for minified bundles
