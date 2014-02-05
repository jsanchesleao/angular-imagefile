module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['app/js/**/*.js'],
        dest: 'dist/concat.js'
      }
    },

    uglify: {
      options: {
        compress: true,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/concat.js',
        dest: 'dist/angular-imagefile.min.js'
      }
    },
    clean: ['dist/concat.js']
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['concat', 'uglify', 'clean']);
}
