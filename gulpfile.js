const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
//Здесь будут зависимости Gulp
gulp.task('default', function () {
  // Running ESLint
  gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format());
  //code for Node
  gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
  //code for browser
  gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
});
