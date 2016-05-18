//TODO not working
module.exports = function (grunt) {
  // load tasks from NPM modules
  grunt.loadNpmTasks('steal-tools');

// Configure the tasks we loaded.
  grunt.initConfig({
    'steal-build': {
      main: {
        options: {
          system: {
            config: __dirname + '/package.json!npm',
            main: 'index'
          },
          buildOptions: {
            bundleSteal: true
          }
        }
      }
    }
  });
  // `grunt build`
  grunt.registerTask('build', 'Make a build.', ['steal-build']);

 };