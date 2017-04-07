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
 * @default 53
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
     * @default 0.5 - The default boolean bias is 50% meaning that the boolean value will be true
     *                about 50% of the time and will be false about 50% of the time.
     */
    _DEFAULT_BOOLEAN_BIAS : .5,


    /**
     * The default minimum integer value.
     *
     * @private
     * @internal
     * @const
     *
     * @type {int}
     * @default 0
     */
    _DEFAULT_INT_MIN : 0,


    /**
     * The default maximum integer value.
     *
     * @private
     * @internal
     * @const
     *
     * @type {int}
     * @default 9007199254740991 - The maximum safe integer (2^53-1).
     */
    _DEFAULT_INT_MAX : Number.MAX_SAFE_INTEGER,


    /**
     * The default minimum float value.
     *
     * @private
     * @internal
     * @const
     *
     * @type {number}
     * @default 0
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
     * @default 1
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
     * @default true
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
     * @default false
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
     * @default 32
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
     * @default 9007199254740991 - The value is 2^53-1.
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length}
     */
     _MAX_STRING_LENGTH : Math.pow(2, _MAXIMUM_STRING_LENGTH_POWER) - 1,

};
