'use strict';


/**
 * Shuffles the given array in place.
 *
 * @private
 * @internal
 * {@link https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array}
 *
 * @param {Array} array - The array to shuffle in place.
 */
function shuffle(array) {
    let index = array.length,
        temp,
        rand;

    // While there remain elements to shuffle…
    while (index) {

        // Pick a remaining element…
        rand = Math.floor(Math.random() * index--);

        // And swap it with the current element.
        temp         = array[index];
        array[index] = array[rand];
        array[rand]  = temp;
    }
}


/**
 * Options type for the function getRandomShuffle().
 *
 * @typedef {Object|null} RandomShuffleOptions
 */


/**
 * Returns a shuffled object.
 *
 * @param {Array|Object|String}  object         - The object to shuffle.
 * @param {RandomShuffleOptions} [options=null] - Set further options.
 *
 * @returns {*|null}
 */
function getRandomShuffle(object, options)
{
    if (typeof options === 'undefined') {
        options = null;
    }

    if (object !== null && typeof object === 'object') {
        const keys   = Object.keys(object),
              length = keys.length;

        if (length === 0) {
            return null;
        }

        // TODO: implement Array/Object shuffles
    }

    if (typeof object === 'string') {
        const chars  = object.split(''),
              length = chars.length;

        if (length === 0) {
            return null;
        }

        return shuffle(chars).join('');
    }

    return null;
}


module.exports = getRandomShuffle;
