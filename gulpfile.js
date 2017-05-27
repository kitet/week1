var utilities=require('gulp-util');
var gulp=require('gulp');
var del=require('del');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var browserify=require('browserify');
var jshint=require('gulp-jshint');
var source=require('vinyl-source-stream');
var browserSync=require('browser-sync').create();
var ui_lib=require('bower-files')({
	"overrides":{
		"bootstrap":{
			"main":[
				"less/bootstrap.css",
				"dist/css/bootstrap.css",
				"dist/js/bootstrap.js"
			]
		}
	}
	});

var buildProd=utilities.env.production;

//create local server
gulp.task('serve', function(){
	browserSync.init({
		server:{
			baseDir:"./",
			index:"index.html"
		}
	});
	gulp.watch(['js/*.js'],['jsBuild']);
	gulp.watch(['bower.json'],['bowerBuild']);
});

gulp.task("bowerBuild", ['bower'], function(){
	browserSync.reload();
});

//task to handle browser reload
gulp.task('jsBuild', ['jsBrowserify','checkJS'], function(){
	browserSync.reload();
});

//build bootstrap js files(contextually)
gulp.task('bowerJS', function(){
	return gulp.src(ui_lib.ext('js').files)
		.pipe(concat('vendor.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./build/js'));

});

gulp.task('bowerCSS', function(){
	return gulp.src(ui_lib.ext('css').files)
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest('./build/css'));
});

//concat js files
gulp.task('concatJS', function(){
	return gulp.src(['./js/ui.js', './js/functions.js'])
		.pipe(concat('alljs.js'))
		.pipe(gulp.dest('./tmp'));
});

gulp.task('browserifyJS',['concatJS'],function(){
	return browserify(
		{entries:['./tmp/alljs.js']})
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('./build/js'));
});

gulp.task('minifyJS',['browserifyJS'], function(){
	return gulp.src('./build/js/app.js')
		.pipe(uglify)
		.pipe(gulp.dest('./build/js'));
});

//js checker
gulp.task('checkJS', function(){
	return gulp.src(['js/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

//clean task
gulp.task("clean",function(){
	return del(['build', 'tmp']);
});
//run the bower task
gulp.task('bower', ['bowerJS','bowerCSS']);

//magic build worker with conditions
gulp.task("build",['clean'], function(){
	if(buildProd){
		//tasks for production
		gulp.start('minifyJS');
	}
	else{
		//tasks for development
		gulp.start('browserifyJS');
	}
	gulp.start('bower');
});