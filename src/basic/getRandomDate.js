'use strict';


/**
 * Options type for the function getRandomDate().
 *
 * @typedef {Object|null} RandomDateOptions
 */


/**
 * Returns a random element from an object.
 *
 * @param {RandomDateOptions} [options=null] - Set further options.
 *
 * @returns {Date}
 */
function getRandomDate(options)
{
    if (typeof options === 'undefined') {
        options = null;
    }

    // TODO: implement function
    return new Date();
}


module.exports = getRandomDate;
