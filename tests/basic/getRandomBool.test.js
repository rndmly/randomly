'use strict';


const assert = require('chai').assert;


module.exports = (Randomly) => {
    describe(
        '.getRandomBool()',
        () => {
            describe(
                '() - call with defaults',
                () => {
                    it(
                        'should return boolean values [true, false] between 49%-51% ratios',
                        () => {
                            const size  = 5000000,
                                  bools = {
                                      true  : 0,
                                      false : 0,
                                  };

                            for (let i = 0; i < size; i++) {
                                let key = Randomly.getRandomBool();

                                ++bools[key];
                            }

                            const ratios = [49, 50, 51];

                            for (let [key, value] of Object.entries(bools)) {
                                let percent = Math.floor(value  / size * 100);

                                assert.include(ratios, percent);
                            }
                        }
                    );
                }
            );
        }
    );
};
