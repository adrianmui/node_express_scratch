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
            },
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: './<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        sass: {
            dev: {
                options: {
                    sourceMap: true
                },
                files: {
                    'public/app.css': 'src/browser/scss/app.scss'
                }
            },
            dist: {
                options: {
                    sourceMap: false,
                    outputStyle: 'compressed'
                },
                files: {
                    'public/app.min.css': 'src/browser/scss/app.scss'
                }
            }
        },
        watch: {
            javascript: {
                files: ['src/browser/js/**/*.js'],
                tasks: ['browserify']
            },
            sass: {
                files: 'src/browser/scss/**/*.scss',
                tasks: ['sass:dev']
            }
        },
        // restart server node process during development
        nodemon: {
            dev: {
                script: 'index.js',
                options: {
                    ignore: ['node_modules/**', 'public', 'src/browser']
                }
            }
        },
        concurrent: {
            dev: {
                tasks: ['watch', 'nodemon'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },

        mochaTest: {
            test: {
                options: {
                    clearRequireCache: false
                }
            },
            src: ['test/*.js']
        }
    });

    // third party grunt plugins
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-mocha-test');

    // self tasks
    grunt.loadTasks('bin/tasks');

    // ex: terminal >> grunt 
    grunt.registerTask('default', ['sass:dev', 'browserify', 'uglify', 'hasCompleted', 'concurrent:dev']);

    grunt.registerTask('hello_world', ['hello_world']);
    grunt.registerTask('test', ['mochaTest']);

    // A very basic default task.
    grunt.registerTask('hasCompleted', 'Log some stuff.', () => {
        grunt.log.write('All tasks has FINISHED..').ok();
        grunt.log.write('line 2..').ok();
    });
}