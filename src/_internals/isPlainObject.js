'use strict';

/**
 * Checks whether the given object is a plain object ({}).
 *
 * @internal
 * @private
 *
 * @param {*} object - The object to test.
 *
 * @returns {boolean}
 */
module.exports = function isPlainObject(object) {
    return Object.prototype.toString.call(object) === '[object Object]';
};