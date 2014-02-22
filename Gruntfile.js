module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    connect: {
      test: {
        options: {
          port: 9000,
          base: './'
        }
      }
    },
    casper: {
      test: {
        options: {
          test: true
        },
        src: ['test/*.js']
      }
    }
  });

  grunt.registerTask('test', ['connect', 'casper']);
  grunt.registerTask('default', ['test']);

};