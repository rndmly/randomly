'use strict';


const gulp  = require('gulp'),
      mocha = require('gulp-mocha');


gulp.task(
    'test',
    () => {
        return gulp
            .src(`${__dirname}/../../tests/index.js`, { read : false })
            .pipe(mocha())
            ;
    }
);
