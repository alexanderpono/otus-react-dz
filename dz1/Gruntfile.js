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
            runJS: {
                files: [ 'src/*.js', 'src/*.ts'],
                tasks: ['run:test']
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
          }        
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('default', ['watch']);
};

