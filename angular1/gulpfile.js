const gulp = require('gulp')
const util = require('gulp-util')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

/* gulp.task('default', function() {
	fs.walk('gulpTasks').on('data', function(file) {
		if ((/\.(js)$/i).test(file.path)) {
			require(file.path)
		}

	}).on('end', function() {
		gulp.start('build')
	})
}) */


gulp.task('default', function() {

	if (util.env.production) { //verifica se ambiente é local ou de produção
		gulp.start('deps', 'app')
	} else {
		gulp.start('deps', 'app', 'server')
	}
})