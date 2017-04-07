'use strict';


/**
 * Casts the given object to a boolean value.
 *
 * @internal
 * @private
 *
 * @param {*}       object               - The object to cast to a boolean value.
 * @param {boolean} [defaultValue=false] - The default value if the given object is not a boolean.
 *
 * @returns {boolean}
 */
module.exports = function boolOf(object, defaultValue) {
    if (typeof defaultValue === 'undefined') {
        defaultValue = false;
    }

    if (typeof object === 'boolean') {
        return object;
    }

    return defaultValue;
};
