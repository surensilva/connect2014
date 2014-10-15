module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                seperator: ';'
            },
            dist: {
                //src: ['src/js/*.js'],
                src: ['src/js/module.js', 'src/js/main.js'],
                dest: 'dist/js/build.js'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/js/build.min.js': ['dist/js/build.js']
                }
            }
        },
        smushit: {
            mygroup: {
                src: ['src/images/*.png', 'src/images/*.jpg'],
                dest: 'dist/img/'
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-smushit');

    // Register tasks
    grunt.registerTask('default', ['concat', 'uglify', 'smushit']);

};