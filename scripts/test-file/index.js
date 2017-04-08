'use strict';

const gulp     = require('gulp'),
      mocha    = require('gulp-mocha'),
      sequence = require('gulp-sequence');


gulp.task(
    'test-file.spec',
    () => {
        const args     = process.argv,
              index    = args.indexOf('--file'),
              filename = args[index+1];

        if (!filename) {
            throw new Error('No file was specified.');
        }

        return gulp
            .src(`${__dirname}/../../tests/index.js`, { read : false })
            .pipe(mocha({ filename : filename }))
            ;
    }
);


gulp.task(
    'test-file',
    (cb) => {
        sequence(
            'lint',
            'test-file.spec'
        )(cb);
    }
);
