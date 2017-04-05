'use strict';


const isPlainObject = require('../_internals/isPlainObject');


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
    getRandomBool   : require('./getRandomBool'),
    getRandomInt    : require('./getRandomInt'),
    getRandom       : require('./getRandomFloat'),
    getRandomFloat  : require('./getRandomFloat'),
    getRandomString : require('./getRandomString'),
    getRandomArray,
    getRandomObject,
    getRandomDate,
    getRandomPick    : require('./getRandomPick'),
    getRandomShuffle : require('./getRandomShuffle'),
};
