/* eslint no-magic-numbers: 0 */

'use strict';


const assert = require('chai').assert;


function generate(genFn, testFn)
{
    const size  = 2500000,
          bools = {
              true  : 0,
              false : 0,
          };

    for (let i = 0; i < size; i++) {
        let key = genFn();

        ++bools[key];
    }

    const percents = {
        true  : Math.floor(bools.true  / size * 100),
        false : Math.floor(bools.false / size * 100),
    };

    if (testFn) {
        for (let key in percents) {
            if (percents.hasOwnProperty(key)) {
                const value = percents[key];

                testFn(value);
            }
        }
    }

    return percents;
}


module.exports = (Randomly) => {
    describe(
        '.getRandomBool()',
        () => {
            describe(
                '() - call with defaults',
                () => {
                    it(
                        'should return boolean values [true, false] between 50%-50% chances (+-1% diff)',
                        () => {
                            const ratios = [49, 50, 51];

                            generate(
                                () => {
                                    return Randomly.getRandomBool();
                                },
                                (value) => {
                                    assert.include(ratios, value);
                                }
                            );
                        }
                    );
                }
            );

            describe(
                '(*) - call with invalid arguments',
                () => {
                    it(
                        'should return boolean values [true, false]',
                        () => {
                            const bools = [true, false],
                                  fn    = Randomly.getRandomBool;

                            [
                                fn(undefined),
                                fn(null),
                                fn(true),
                                fn('0'),
                                fn(NaN),
                                fn(-Infinity),
                                fn(Infinity),
                                fn({}),
                                fn([]),

                            ].forEach(
                                (value) => {
                                    assert.include(bools, value);
                                }
                            );
                        }
                    );
                }
            );

            describe(
                '(0.0) - biased - false all the time',
                () => {
                    it(
                        'should return false in 100% of the time',
                        () => {
                            const percents = generate(() => { return Randomly.getRandomBool(0.0); });

                            assert.equal(percents.true,  0);
                            assert.equal(percents.false, 100);
                        }
                    );
                }
            );

            describe(
                '(0.25) - biased - true about 25%, false about 75%',
                () => {
                    it(
                        'should return [true, false] between 25%-75% chances (+-1% diff)',
                        () => {
                            const percents = generate(() => { return Randomly.getRandomBool(0.25); });

                            assert.include([24, 25, 26], percents.true);
                            assert.include([74, 75, 76], percents.false);
                        }
                    );
                }
            );

            describe(
                '(0.5) - biased - true or false about 50% of the time',
                () => {
                    it(
                        'should return boolean values [true, false] between 50%-50% chances (+-1% diff)',
                        () => {
                            const ratios = [49, 50, 51];

                            generate(
                                () => {
                                    return Randomly.getRandomBool();
                                },
                                (value) => {
                                    assert.include(ratios, value);
                                }
                            );
                        }
                    );
                }
            );

            describe(
                '(0.75) - biased - true about 75%, false about 25%',
                () => {
                    it(
                        'should return [true, false] between 75%-25% chances (+-1% diff)',
                        () => {
                            const percents = generate(() => { return Randomly.getRandomBool(0.75); });

                            assert.include([74, 75, 76], percents.true);
                            assert.include([24, 25, 26], percents.false);
                        }
                    );
                }
            );

            describe(
                '(1.0) - biased - true all the time',
                () => {
                    it(
                        'should return true in 100% of the time',
                        () => {
                            const percents = generate(() => { return Randomly.getRandomBool(1.0); });

                            assert.equal(percents.true,  100);
                            assert.equal(percents.false, 0);
                        }
                    );
                }
            );
        }
    );
};
