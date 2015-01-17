module.exports = function(grunt) {

	// 1. Вся настройка находится здесь
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			// 2. Настройка для объединения файлов находится тут
			dist: {
				src: [
					'js/lib/**/*.js', // Все JS в папке libs
					'js/lang/*.js',  // Конкретный файл
					'js/service/**/*.js', // Все JS в папке libs
					'js/app/view/base/*.js', // Все JS в папке libs
					'js/app/view/**/*.js', // Все JS в папке libs
					'js/app/main.js'  // Конкретный файл
				],
				dest: 'build/js/production.js'
			}
		},
		'uglify': {
			my_target: {
				files: {
					'build/js/output.min.js': ['build/js/production.js']
				}
			}

		},
		'borschik': {

			"styles": {
				"src": "css/main.css",
				"dest": "build/css/main.css"
			}

		},
		'copy': {
			main: {

				files: [

					// includes files within path and its sub-directories
					{expand: true, src: ['font/**'], dest: 'build/'},
					{expand: true, src: ['i/**'], dest: 'build/'},
					{expand: true, src: ['img/**'], dest: 'build/'},
					{expand: true, src: ['index.html'], dest: 'build/'}

				]

			}
		}

	});

	// 3. Тут мы указываем Grunt, что хотим использовать этот плагин
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-borschik');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
	grunt.registerTask('default', ['concat', 'uglify', 'borschik', 'copy']);

};