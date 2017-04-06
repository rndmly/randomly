'use strict';


/**
 * Casts the given object to boolean.
 *
 * @internal
 * @private
 *
 * @param {*}       object               - The object to cast to boolean.
 * @param {boolean} [defaultValue=false] - The default value if the given object is not a boolean.
 *
 * @returns {boolean}
 */
module.exports = function asBool(object, defaultValue) {
    if (typeof defaultValue === 'undefined') {
        defaultValue = false;
    }

    return typeof object === 'boolean' ? object : defaultValue;
};
