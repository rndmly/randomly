'use strict';


const constants = require('../_internals/constants');


/**
 * Returns a random boolean.
 *
 * @param {number|null} [bias=0.5] - The bias, by which the random boolean will be generated.
 *                                   This float range of [0,1] determines how often the value true will be returned.
 *
 *                                   If the bias === .25 the returned boolean will be true about 25% of the time
 *                                   and false about 75% of the time.
 *                                   If the bias === .75 the returned boolean will be true about 75% of the time
 *                                   and false about 25% of the time.
 *
 *                                   If the bias === 0 false will be returned all the time.
 *                                   If the bias === 1 true will be returned all the time.
 *
 * @returns {boolean}
 */
function getRandomBool(bias)
{
    if (typeof bias === 'undefined') {
        bias = constants._DEFAULT_BOOLEAN_BIAS;
    }

    if (bias <= 0) {
        return false;
    }

    if (bias >= 1) {
        return true;
    }

    return Math.random() < bias ? true : false;
}


module.exports = getRandomBool;
