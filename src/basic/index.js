'use strict';


const isPlainObject = require('../_internals/isPlainObject');


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
    getRandomBool   : require('./getRandomBool'),
    getRandomInt    : require('./getRandomInt'),
    getRandom       : require('./getRandomFloat'),
    getRandomFloat  : require('./getRandomFloat'),
    getRandomString : require('./getRandomString'),
    getRandomArray  : require('./getRandomArray'),
    getRandomObject : require('./getRandomObject'),
    getRandomDate,
    getRandomPick    : require('./getRandomPick'),
    getRandomShuffle : require('./getRandomShuffle'),
};
