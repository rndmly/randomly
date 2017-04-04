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


/**
 * Options type for the function getRandomArray().
 *
 * @typedef {Object|null} RandomArrayOptions
 */


/**
 * Returns a random array.
 *
 * @param {RandomArrayOptions} options - Set further options.
 *
 * @returns {Array}
 */
function getRandomArray(options = null)
{
    // TODO: implement method
    return [];
}


/**
 * Options type for the function getRandomObject().
 *
 * @typedef {Object|null} RandomObjectOptions
 */


/**
 * Returns a random object.
 *
 * @param {RandomObjectOptions} options - Set further options.
 *
 * @returns {Object}
 */
function getRandomObject(options = null)
{
    // TODO: implement method
    return {};
}


/**
 * Options type for the function getRandomDate().
 *
 * @typedef {Object|null} RandomDateOptions
 */


/**
 * Returns a random element from an object.
 *
 * @param {RandomDateOptions} [options] - Set further options.
 *
 * @returns {Date}
 */
function getRandomDate(options = null)
{
    // TODO: implement function
    return new Date();
}


/**
 * Options type for the function getRandomPick().
 *
 * @typedef {Object|null} RandomPickOptions
 */


/**
 * Returns a random element from an object.
 *
 * @param {Array|Object|String} object    - The object to return a random element from.
 * @param {RandomPickOptions}   [options] - Set further options.
 *
 * @returns {Array|Object|String}
 */
function getRandomPick(object, options = null)
{
    // TODO: implement function
    return [];
}


/**
 * Options type for the function getRandomShuffle().
 *
 * @typedef {Object|null} RandomShuffleOptions
 */


/**
 * Returns a shuffled object.
 *
 * @param {Array|Object|String}    object    - The object to shuffle.
 * @param {RandomShuffleOptions}   [options] - Set further options.
 *
 * @returns {Array|Object|String}
 */
function getRandomShuffle(object, options = null)
{
    // TODO: implement function
    return [];
}


module.exports = {
    getRandomBool  : require('./getRandomBool'),
    getRandom      : require('./getRandomFloat'),
    getRandomFloat : require('./getRandomFloat'),
    getRandomInt,
    getRandomString,
    getRandomArray,
    getRandomObject,
    getRandomDate,
    getRandomPick,
    getRandomShuffle,
};
