'use strict';


const constants      = require('../_internals/constants'),
      isPlainObject  = require('../_internals/isPlainObject'),
      asUsefulNumber = require('../_internals/asUsefulNumber'),
      asBool         = require('../_internals/asBool');


/**
 * Options type for the function getRandom().
 *
 * @typedef {Object|null} RandomOptions
 *
 * @property {number}  [min=0]            - The value of minimum.
 * @property {number}  [max=1]            - The value of maximum.
 * @property {boolean} [includeMin=true]  - Determines whether the minimum value is included or excluded.
 * @property {boolean} [includeMax=false] - Determines whether the maximum value is included or excluded.
 */


/**
 * Returns a random float number between 0 and 1.
 * By default, this function returns 0 (inclusive) and 1 (exclusive),
 * which behavior can be changed via the options parameter.
 *
 * @param {RandomOptions} [options=null] - Set min and max values, also their inclusions, or exclusions.
 *
 * @returns {number}
 */
function getRandomFloat(options = null)
{
    if (!options || !isPlainObject(options)) {
        return Math.random();
    }

    const min = asUsefulNumber(options.min, constants._DEFAULT_FLOAT_MIN),
          max = asUsefulNumber(options.max, constants._DEFAULT_FLOAT_MAX),

          incMin = asBool(options.includeMin, constants._DEFAULT_INCLUDE_MIN),
          incMax = asBool(options.includeMax, constants._DEFAULT_INCLUDE_MAX);

    if (min === max) {
        throw new Error(`Min (${min}) and max (${max}) cannot be equal!`);
    } else if (min > max) {
        throw new Error(`Min (${min}) cannot be larger, than max (${max})!`);
    }

    // console.log(options);
    // console.log(incMin, incMax);

    if (min === 0 && max === 1) {
        // the default Math.random() functionality;
        if (incMin === true && incMax === false) {
            return Math.random();
        }

        if (incMin === true && incMax === true) {
            return Math.random() > 0 ? Math.random() : 1;
        }

        if (incMin === false && incMax === true) {
            return 1 - Math.random();
        }

        if (incMin === false && incMax === false) {
            while (true) {
                let rnd = Math.random();

                if (rnd > 0) {
                    return rnd;
                }
            }
        }
    }

    // TODO: implement method
    // TODO: implement inclusive/exclusive options
    // TODO: implement biased random float [0,1]|(0,1)
    return Math.random();
}


module.exports = getRandomFloat;
