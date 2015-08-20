module.exports = function (grunt) {
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            options: {},
            web: {options: {script: 'app.js'}}
        },
        watch: {
            frontend: {
                options: {livereload: true},
                files: [
                    'public/*.html',
                    'public/views/*.html',
                    'public/styles/*.css',
                    'public/scripts/*.js',
                    'public/images/*.{png,jpg,jpeg}'
                ]
            },
            web: {
                files: [
                    '*.js',
                    'routes/*.js'],
                tasks: ['express:web'],
                options: {
                    nospawn: true,
                    atBegin: true,
                }
            }
        },
        parallel: {
            web: {
                options: {stream: true},
                tasks: [
                    {
                        grunt: true,
                        args: ['watch:frontend']
                    },
                    {
                        grunt: true,
                        args: ['watch:web']
                    }
                ]
            }
        }
    });
    grunt.registerTask('web', ['parallel:web']);
    grunt.registerTask('default', ['web']);
}
