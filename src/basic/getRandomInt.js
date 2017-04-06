'use strict';


const isPlainObject = require('../_internals/isPlainObject');


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
 * @param {RandomIntOptions} [options=null] - Set further options.
 *
 * @returns {int}
 */
function getRandomInt(options)
{
    if (typeof options === 'undefined') {
         options = null;
    }

    if (!options || !isPlainObject(options)) {
        return Math.random();
    }

    // TODO: implement method
    // TODO: implement inclusive/exclusive options
    // TODO: implement biased random int
    return Math.random();
}


module.exports = getRandomInt;
