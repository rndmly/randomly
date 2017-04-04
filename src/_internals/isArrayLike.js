'use strict';


/**
 * Checks whether the given object is array-like.
 *
 * @internal
 * @private
 *
 * @param {*} object - The object to test.
 *
 * @returns {boolean}
 */
module.exports = function isArrayLike(object) {
    if (Array.isArray(object)) {
        return true;
    }

    if (object && object !== null && typeof object.length === 'number') {
        return true;
    }

    return false;
};
