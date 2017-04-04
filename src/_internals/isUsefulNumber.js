'use strict';


/**
 * Checks whether the given object is a useful number.
 * A useful number is a float or an integer and not NaN, -Infinity, or +Infinity.
 *
 * @internal
 * @private
 *
 * @param {*} object - The object to test.
 *
 * @returns {boolean}
 */
module.exports = function isUsefulNumber(object) {
    return typeof object === 'number'
           && object === object        // NaN check
           && object !== -Infinity
           && object !== Infinity;
};
