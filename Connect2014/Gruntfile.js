module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                seperator: ';'
            },
            dist: {
                //src: ['src/js/module.js', 'src/js/main.js'],
                src: ['src/js/module.js', 'src/js/main.js']
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
        pagespeed: {
            options: {
                nokey: true,
                url: "http://www.adidas.co.uk/"
            },
            prod: {
                options: {
                    url: "http://www.adidas.co.uk/",
                    locale: "en_GB",
                    strategy: "mobile",
                    threshold: 80
                }
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-pagespeed');

    // Register tasks
    grunt.registerTask('default', ['concat', 'uglify', 'pagespeed']);

};