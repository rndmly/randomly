'use strict';


/**
 * The power of the maximum string length.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length}
 *
 * @private
 * @internal
 * @const
 *
 * @type {number}
 */
const _MAXIMUM_STRING_LENGTH_POWER = 53;


module.exports = {

    /**
     * The default boolean bias.
     *
     * @private
     * @internal
     * @const
     *
     * @type {number}
     */
    _DEFAULT_BOOLEAN_BIAS : .5,


    /**
     * The default minimum float value.
     *
     * @private
     * @internal
     * @const
     *
     * @type {number}
     */
    _DEFAULT_FLOAT_MIN : 0,


    /**
     * The default maximum float value.
     *
     * @private
     * @internal
     * @const
     *
     * @type {number}
     */
    _DEFAULT_FLOAT_MAX : 1,


    /**
     * The default inclusion of the minimum value.
     *
     * @private
     * @internal
     * @const
     *
     * @type {boolean}
     */
    _DEFAULT_INCLUDE_MIN : true,


    /**
     * The default inclusion of the maximum value.
     *
     * @private
     * @internal
     * @const
     *
     * @type {boolean}
     */
    _DEFAULT_INCLUDE_MAX : false,


    /**
     * The default length of a random string.
     *
     * @private
     * @internal
     * @const
     *
     * @type {int}
     */
    _DEFAULT_STRING_LENGTH : 32,


    /**
     * The maximum length of a string.
     *
     * @private
     * @internal
     * @const
     *
     * @type {int}
     */
     _MAX_STRING_LENGTH : Math.pow(2, _MAXIMUM_STRING_LENGTH_POWER) - 1,

};
