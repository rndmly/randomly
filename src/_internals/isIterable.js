'use strict';


const isArrayLike   = require('./isArrayLike'),
      isPlainObject = require('./isPlainObject');


/**
 * Checks whether the given object is an iterable object.
 * An iterable object is either an array-like, a plain object or a string.
 *
 * @internal
 * @private
 *
 * @param {*} object - The object to test.
 *
 * @returns {boolean}
 */
module.exports = function isIterable(object) {
    if (typeof object === 'object') {
        if (isArrayLike(object)) {
            return true;
        }

        if (isPlainObject(object)) {
            return true;
        }

        if (typeof object === 'string') {
            return true;
        }
    }

    return false;
};
