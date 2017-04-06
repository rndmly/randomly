'use strict';


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
 * @param {RandomStringOptions} [options=null] - Set further options.
 *
 * @returns {string}
 */
function getRandomString(options)
{
    if (typeof options === 'undefined') {
        options = null;
    }

    // TODO: implement method
    return '';
}


module.exports = getRandomString;
