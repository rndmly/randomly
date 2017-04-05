'use strict';


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

    // TODO: implement method
    return '';
}


module.exports = getRandomString;
