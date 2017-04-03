'use strict';


const isPlainObject = require('../_internals/isPlainObject');


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
function getRandom(options = null)
{
    if (!options || !isPlainObject(options)) {
        return Math.random();
    }

    // TODO: implement inclusive/exclusive options
    // TODO: implement biased random float [0,1]|(0,1)
    return Math.random();
}


module.exports = {
    getRandom,
};