import Gulp from "gulp"
import babel from 'gulp-babel'


const src = ::Gulp.src
	,dest = ::Gulp.dest
	,watch = ::Gulp.watch
	,task = ::Gulp.task


task('build', () => src('src/**/*.js')
	.pipe(babel())
	.pipe(dest('.')))

