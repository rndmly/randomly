'use strict';


/**
 * Returns a random element from an object.
 *
 * @param {Array|Object|String} object - The object to return a random element from.
 *
 * @returns {*|null}
 */
function getRandomPick(object)
{
    if (object !== null && typeof object === 'object') {
        const keys   = Object.keys(object),
              length = keys.length;

        if (length === 0) {
            return null;
        }

        return object[keys[Math.floor(Math.random() * length)]];
    }

    if (typeof object === 'string') {
        const length = object.length;

        if (length === 0) {
            return null;
        }

        return object.charAt(Math.floor(Math.random() * length));
    }

    return null;
}


module.exports = getRandomPick;
