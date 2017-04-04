'use strict';


/**
 * Casts the given object to a useful number.
 * A useful number is a float or an integer and not NaN, -Infinity, or +Infinity.
 *
 * @internal
 * @private
 *
 * @param {*}      object         - The object to cast to a useful number.
 * @param {number} [defaultValue] - The default value if the given object is not a useful number.
 *
 * @returns {number}
 */
module.exports = function asUsefulNumber(object, defaultValue = 0) {
    if (typeof object === 'number'
        && object === object       // NaN check
        && object !== -Infinity
        && object !== Infinity) {

        return object;
    }

    return defaultValue;
};
