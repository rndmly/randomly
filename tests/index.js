'use strict';

const Randomly = require('../index');

describe(
    'Randomly',
    () => {
        let filename;

        for (let i = 0, args = process.argv, len = args.length; i < len; i++) {
            if (args[i].indexOf('--filename') === 0) {
                const parts = args[i].split('=');

                filename = parts[1];

                break;
            }
        }

        if (filename) {
            require(`./${filename}`)(Randomly);

        } else {
            [
                require('./basic'),

            ].forEach(
                (module) => {
                    module(Randomly);
                }
            );
        }
    }
);
