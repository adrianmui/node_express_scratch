module.exports = function(grunt) {
    grunt.registerTask('hello_world', 'example first-party task', () => {
        grunt.log.write('Example Task has COMPLETED..').ok();
    });
}