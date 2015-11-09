var pkgjson = require('./package.json');

var config = {
	pkg: pkgjson,
	app: 'lib',
	dist: 'dist'
}

module.exports = function(grunt) {
	// Configuration
	grunt.initConfig({
		config: config,
		pkg: config.pkg,
		bower: grunt.file.readJSON('./.bowerrc'),
		copy: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.app %>/tokenizer',
					src: 'index.js',
					dest: '<%= config.dist %>'
				}]
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> lib - v<%= pkg.version %> -' +
					'<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			dist: {
				files: {
					'<%= config.dist %>/js/lib.min.js': [
						'<%= bower.directory %>/jquery/jquery.js',
						'<%= bower.directory %>/underscore/underscore.js',
						'<%= bower.directory %>/requirejs/require.js',
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', [
		'copy',
		// 'uglify'
	]);
};
