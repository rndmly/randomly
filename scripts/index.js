'use strict';


const gulp = require('gulp');


require('./lint');
require('./test');
require('./test-file');


gulp.task(
    'default',
    () => {
        return gulp;
    }
);
