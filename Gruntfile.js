/*!
 * Project Name Gruntfile
 * http://urlhere.com
 * @author Andrew Houle
 */
 
module.exports = function(grunt) {

// load all grunt tasks
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

grunt.initConfig({
 
	pkg: grunt.file.readJSON('package.json'),

	/* ==========================================================================
	   Set project object
	   ========================================================================== */

	project: {
	  	theme: 'themes/themename',
	  	css: [
	    	'<%= project.theme %>/stylesheets/sass/layout.scss'
	  	],
	  	js: [
	    	'<%= project.theme %>/js/*.js'
	  	]
	},

	/* ==========================================================================
	   SASS
	   ========================================================================== */

	sass: {
	  	dev: {
	    	options: {
	      		style: 'compressed',
	      		compass: true
	    	},
	    	files: {
	      		'<%= project.theme %>/stylesheets/css/layout.css': '<%= project.theme %>/stylesheets/sass/layout.scss'
	    	}
	  	}
	},

	/* ==========================================================================
	   Watch
	   ========================================================================== */

	watch: {
	  	sass: {
	    	files: '<%= project.theme %>/stylesheets/sass/{,*/}*.{scss,sass}',
	    	tasks: ['sass:dev']
	  	}
	}	

});

/* ==========================================================================
   Default task Run `grunt` on the command line
   ========================================================================== */
	   
grunt.registerTask('default',['sass:dev','watch']);
 
};