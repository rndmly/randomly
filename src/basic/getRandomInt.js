'use strict';


const constants      = require('../_internals/constants'),
      isPlainObject  = require('../_internals/isPlainObject'),
      asUsefulNumber = require('../_internals/asUsefulNumber'),
      asBool         = require('../_internals/asBool');


/**
 * Options type for the function getRandomInt().
 *
 * @typedef {Object|null} RandomIntOptions
 *
 * @property {number}  [min=0]                       - The value of minimum.
 * @property {number}  [max=Number.MAX_SAFE_INTEGER] - The value of maximum.
 * @property {boolean} [includeMin=true]             - Determines whether the minimum value is included or excluded.
 * @property {boolean} [includeMax=false]            - Determines whether the maximum value is included or excluded.
 */


/**
 * Returns a random integer between 0 and Number.MAX_SAFE_INTEGER.
 * By default, this function returns min (inclusive) and max (exclusive),
 * which behavior can be changed via the options parameter.
 *
 * @param {RandomIntOptions} options - Set further options.
 *
 * @returns {int}
 */
function getRandomInt(options = null)
{
    if (!options || !isPlainObject(options)) {
        return Math.random();
    }

    // TODO: implement method
    // TODO: implement inclusive/exclusive options
    // TODO: implement biased random int
    return Math.random();
}


module.exports = getRandomInt;
