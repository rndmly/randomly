/* eslint no-magic-numbers: 0 */

'use strict';


const assert = require('chai').assert;


module.exports = (Randomly) => {
    describe(
        '.getRandomFloat()',
        () => {
            it(
                'should return [0,1) in 10 groups with [0.0..0.9] range between 9.9%-10.1% chances',
                () => {
                    const size = 1000000,
                          ratios = {
                              '0.0' : 0,
                              '0.1' : 0,
                              '0.2' : 0,
                              '0.3' : 0,
                              '0.4' : 0,
                              '0.5' : 0,
                              '0.6' : 0,
                              '0.7' : 0,
                              '0.8' : 0,
                              '0.9' : 0,
                          };

                    for (let i = 0, key; i < size; i++) {
                        key = '0.' + Math.floor(Randomly.getRandom() * 10);
                        ratios[key]++;
                    }

                    const ratioArr = [9.9, 10, 10.1];

                    for (let key in ratios) {
                        let ratio = Math.floor(ratios[key] / size * 1000) / 10;
                        assert.include(ratioArr, ratio);
                    }
                }
            );
        }
    );
};
