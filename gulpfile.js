var gulp = require("gulp"),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
cssNested = require('postcss-nested');
cssImport = require('postcss-import');

gulp.task('default', function() {
  console.log("Gulp is running!");
});

gulp.task('html', function() {
  console.log("HTML has changed!");
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssVars, cssNested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
})

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles')
  });
});
