'use strict';


const isPlainObject = require('../_internals/isPlainObject');


/**
 * Options type for the function getRandomBoolean().
 *
 * @typedef {Object|null} RandomBooleanOptions
 *
 * @property {Object|null} [bias=null] - Determines the bias.
 */


/**
 * Returns a random boolean.
 *
 * @param {RandomBooleanOptions} [options=null] - Additional options.
 *
 * @returns {boolean}
 */
module.exports = function getRandomBool(options = null)
{
    if (!options || !isPlainObject(options)) {
        return Math.random() < 0.5 ? true : false;
    }

    // TODO: implement method
    // TODO: implement biased random boolean
    return Math.random() < 0.5 ? true : false;
};
