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


module.exports = {
    getRandomBool  : require('./getRandomBool'),
    getRandomInt   : require('./getRandomInt'),
    getRandom      : require('./getRandomFloat'),
    getRandomFloat : require('./getRandomFloat'),
    getRandomString,
    getRandomArray,
    getRandomObject,
    getRandomDate,
    getRandomPick    : require('./getRandomPick'),
    getRandomShuffle : require('./getRandomShuffle'),
};
