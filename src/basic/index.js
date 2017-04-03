'use strict';


const isPlainObject = require('../_internals/isPlainObject');


/**
 * The default length of a random string.
 *
 * @const
 * @type {int}
 */
const DEFAULT_STRING_LENGTH = 32;


/**
 * The maximum length of a string.
 *
 * @const
 * @type {int}
 */
const MAX_STRING_LENGTH = (2**53) - 1;


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
function getRandomBool(options = null)
{
    if (!options || !isPlainObject(options)) {
        return Math.random() < 0.5 ? true : false;
    }

    // TODO: implement method
    // TODO: implement biased random boolean
    return Math.random() < 0.5 ? true : false;
}


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

    // TODO: implement method
    // TODO: implement inclusive/exclusive options
    // TODO: implement biased random float [0,1]|(0,1)
    return Math.random();
}


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


/**
 * Options type for the function getRandomString().
 *
 * @typedef {Object|null} RandomStringOptions
 *
 * @property {number}  [length=DEFAULT_STRING_LENGTH] - The length of the string.
 * @property {number}  [min=0]                        - The value of minimum length.
 * @property {number}  [max=MAX_STRING_LENGTH]        - The value of maximum length.
 */


/**
 * Returns a random string.
 *
 * @param {RandomStringOptions} options - Set further options.
 *
 * @returns {string}
 */
function getRandomString(options = null)
{
    let length = DEFAULT_STRING_LENGTH,
        min,
        max;

    if (isPlainObject(options)) {
        length = options.length || DEFAULT_STRING_LENGTH;
        min    = options.min;
        max    = options.max;
    }

    // TODO: implement method
    return '';
}


module.exports = {
    getRandomBool,
    getRandom,
    getRandomFloat : getRandom,
    getRandomInt,
    getRandomString,
};
