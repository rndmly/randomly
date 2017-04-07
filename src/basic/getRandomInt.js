'use strict';


const constants     = require('../_internals/constants'),
      isPlainObject = require('../_internals/isPlainObject'),
      numberOf      = require('../_internals/numberOf'),
      boolOf        = require('../_internals/boolOf');


/**
 * Options type for the function getRandomInt().
 *
 * @typedef {Object|null} RandomIntOptions
 *
 * @property {boolean} [includeMin=true]  - Determines whether the minimum value is included or excluded.
 * @property {boolean} [includeMax=false] - Determines whether the maximum value is included or excluded.
 */


/**
 * Returns a random integer between 0 and Number.MAX_SAFE_INTEGER.
 * By default, this function returns min (inclusive) and max (exclusive),
 * which behavior can be changed via the options parameter.
 *
 * @param {number}           [minimum=0]      - The minimum bound of the random integer.
 * @param {number}           [maximum=2^53-1] - The maximum bound of the random integer.
 * @param {RandomIntOptions} [options=null]   - Further generator options.
 *
 * @returns {int}
 */
function getRandomInt(minimum, maximum, options)
{
    // TODO: implement bound checking
    // TODO: implement negative ranges
    // TODO: implement biased random int

    minimum = numberOf(minimum, constants._DEFAULT_INT_MIN);
    maximum = numberOf(maximum, constants._DEFAULT_INT_MAX);

    if (typeof options === 'undefined') {
         options = null;
    }

    let incMin = constants._DEFAULT_INCLUDE_MIN,
        incMax = constants._DEFAULT_INCLUDE_MAX;

    if (isPlainObject(options)) {
        incMin = boolOf(options.includeMin, incMin);
        incMax = boolOf(options.includeMax, incMax);
    }

    // The default random integer case (minimum included, maximum is excluded)
    if (incMin && !incMax) {
        return Math.floor(Math.random() * (maximum - minimum)) + minimum;
    }

    if (incMin && incMax) {
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }

    if (!incMin && incMax) {
        return Math.floor(Math.random() * (maximum - minimum)) + minimum + 1;
    }

    // The least common random integer case (minimum and maximum are excluded)
    return Math.floor(Math.random() * (maximum - minimum - 1)) + minimum + 1;
}


module.exports = getRandomInt;
