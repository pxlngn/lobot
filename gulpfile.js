var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};
// var browserSync = require('browser-sync').create();

// SASS
gulp.task('sass', function() {
  return gulp.src('web/themes/bespin/scss/*.scss') // grab all in directory scss
    .pipe(sass()) // using gulp-sass
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('web/themes/bespin/css'))
    // .pipe(browserSync.reload({
    //   stream: true
    // }))
});

// watch
gulp.task('watch', function() {
  gulp.watch('web/themes/bespin/scss/*.scss', ['sass']);
  // add others to watch
  // Reloads the browser whenever HTML or JS files change
  // gulp.watch('web/themes/bespin/*.php', browserSync.reload);
  // gulp.watch('web/themes/bespin/js/**/*.js', browserSync.reload);
});

// browser sync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "web"
      // index: "index.php",

    },
  })
});
