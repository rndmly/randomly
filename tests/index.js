'use strict';


const glob = require('glob'),
      path = require('path');


const Randomly = require('../index');


function requireTests(cwd)
{
    const files = glob.sync(
        '**/*.test.js',
        {
            cwd : cwd,
        }
    );

    files.forEach(
        (file) => {
            const p = path.normalize(cwd + '/' + file);

            require(p)(Randomly);
        }
    );
}


describe(
    'Randomly',
    () => {
        const files = glob.sync(
            '**/index.js',
            {
                cwd    : __dirname,
                ignore : '*',
            }
        );

        files.forEach(
            (file) => {
                const p = path.normalize(__dirname + '/' + file);

                require(p)(requireTests);
            }
        );
    }
);
