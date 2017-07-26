module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
          sourceMap: true,
          sourceMapFilename: 'assets/css/opus.min.css.map', // where file is generated and located
          sourceMapURL: 'opus.min.css.map', // the complete url and filename put in the compiled css file
          sourceMapBasepath: '/', // Sets sourcemap base path, defaults to current working directory.
          sourceMapRootpath: '' // adds this path onto the sourcemap filename and less file paths
        },
        files: {
          "assets/css/opus.min.css": "assets/less/base.less" // destination file and source file
        }
      }
    },
    jshint: {
      all: ['assets/js/*.js',"!assets/js/typekit.js"]
    },
    watch: {
      styles: {
        files: ['assets/less/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          livereload: true,
          nospawn: true
        }
      },
			scripts: {
				files: ['assets/js/*.js'],
        tasks: ['jshint']
			}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['less', 'jshint', 'watch']);
};
