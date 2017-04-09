'use strict';


const Randomly = require('../index'),
      utils    = require('./_utils');


/**
 * Require modules with the necessary dependencies.
 *
 * @param {Array|*} modules                  - One ore more modules to require and run.
 * @param {boolean} [dependenciesOnly=false] - Pass only the dependencies.
 */
function requireModules(modules, dependenciesOnly)
{
    dependenciesOnly = typeof dependenciesOnly === 'boolean' ? dependenciesOnly : false;

    let modulesArray = modules;

    if (!Array.isArray(modules)) {
        modulesArray = [modules];
    }

    modulesArray.forEach(
        (module) => {
            if (dependenciesOnly) {
                require(module)(Randomly, utils);

            } else {
                require(module)(requireModules, [Randomly, utils]);
            }
        }
    );
}


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
            requireModules(`./${filename}`, true);

        } else {
            requireModules([
                './basic',
            ]);
        }
    }
);
