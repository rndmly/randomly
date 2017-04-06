'use strict';


const gulp = require('gulp');


require('./lint');
require('./test');


gulp.task(
    'default',
    () => {
        return gulp;
    }
);
