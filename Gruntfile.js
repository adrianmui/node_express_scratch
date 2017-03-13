module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Browserify front-end modules
        browserify: {
            options: {
                browserifyOptions: {
                    debug: true
                }
            },
            js: {
                src: ['src/browser/js/app.js'],
                dest: 'public/app.js'
            }
        },


        uglify: {
            dist: {
                files: {
                    'public/app.min.js': 'public/app.js'
                }
            }
        },
    });

    // third party grunt plugins
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // ex: terminal >> grunt 
    grunt.registerTask('default', ['browserify', 'uglify']);
}