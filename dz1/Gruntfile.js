module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            configFiles: {
                files: [ 'Gruntfile.js'],
                options: {
                    reload: true
                }
            }
            ,
            runTest: {
                files: [ 'src/*.js', 'src/*.ts'],
                tasks: ['run:test']
            }
            ,
            runLint: {
                files: [ 'src/*.js', 'src/*.ts'],
                tasks: ['run:lint']
            }
        }
        ,
        run: {
            ls: {
              exec: 'ls',
            }
            ,
            test: {
                exec: 'npm test',
            }
            ,
            lint: {
                exec: 'eslint src/*.*',
            }
          }        
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('default', ['watch']);
};

