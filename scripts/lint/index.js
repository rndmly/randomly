'use strict';


const gulp     = require('gulp'),
      sequence = require('gulp-sequence'),
      eslint   = require('gulp-eslint');


gulp.task(
    'lint.src',
    () => {
        return gulp
            .src(`${__dirname}/../../src/**/*.js`)
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError())
            ;
    }
);


gulp.task(
    'lint.tests',
    () => {
        return gulp
            .src(`${__dirname}/../../tests/**/*.js`)
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError())
            ;
    }
);


gulp.task(
    'lint',
    (cb) => {
        sequence(
            'lint.src',
            'lint.tests'
        )(cb);
    }
);
