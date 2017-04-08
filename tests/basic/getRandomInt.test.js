/* eslint no-magic-numbers: 0 */

'use strict';


const assert = require('chai').assert;


function generate(genFn, testFn)
{
    const size = 10000000,
          vals = {};

    for (let i = 0; i < size; i++) {
        let key = genFn();

        if (!(key in vals)) {
            vals[key] = 0;
        }

        ++vals[key];
    }

    const percents = {};

    for (let key in vals) {
        if (vals.hasOwnProperty(key)) {
            const value = vals[key];

            percents[key] = Math.round(value / size * 1000) / 10;
        }
    }

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


function getNumbers(percents)
{
    return Object
        .keys(percents)
        .map(Number)
        .sort((a, b) => a - b);
}


module.exports = (Randomly) => {
    describe(
        '.getRandomInt()',
        () => {
            describe(
                'in general cases',
                () => {
                    describe(
                        'when calling .getRandomInt() with default arguments',
                        () => {
                            it(
                                'should return integers in the range [0, Number.MAX_SAFE_INTEGER)',
                                (done) => {
                                    const len = 15000000;

                                    let sum = 0;

                                    for (let i = 0; i < len; i++) {
                                        sum += Randomly.getRandomInt();
                                    }

                                    let avg  = sum / len,
                                        bias = Math.round(avg / (Number.MAX_SAFE_INTEGER / 2) * 50) / 100;

                                    // if the random integers in the range [0, Number.MAX_SAFE_INTEGER)
                                    // are properly distributed, the average will be ~4503599627370496,
                                    // which is about the half of 9007199254740991, hence the .5 bias
                                    assert.equal(.5, bias);

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomInt(0, 10) with default options',
                        () => {
                            it(
                                'should return integers in the range [0, 10), each number with a 10% chance',
                                (done) => {
                                    const percents = generate(
                                        () => {
                                            return Randomly.getRandomInt(0, 10);
                                        },
                                        (value) => {
                                            assert.equal(10, value);
                                        }
                                    );

                                    assert.deepEqual(
                                        getNumbers(percents),
                                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                                    );

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomInt(0, 10, { includeMin: true, includeMax: false })',
                        () => {
                            it(
                                'should return integers in the range [0, 10), each number with a 10% chance',
                                (done) => {
                                    const percents = generate(
                                        () => {
                                            return Randomly.getRandomInt(0, 10, {
                                                includeMin : true,
                                                includeMax : false,
                                            });
                                        },
                                        (value) => {
                                            assert.equal(10, value);
                                        }
                                    );

                                    assert.deepEqual(
                                        getNumbers(percents),
                                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                                    );

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomInt(0, 10, { includeMin: true, includeMax: true })',
                        () => {
                            it(
                                'should return integers in the range [0, 10], each number with a 9.1% chance',
                                (done) => {
                                    const percents = generate(
                                        () => {
                                            return Randomly.getRandomInt(0, 10, {
                                                includeMin : true,
                                                includeMax : true,
                                            });
                                        },
                                        (value) => {
                                            assert.equal(9.1, value);
                                        }
                                    );

                                    assert.deepEqual(
                                        getNumbers(percents),
                                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                                    );

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomInt(0, 10, { includeMin: false, includeMax: true })',
                        () => {
                            it(
                                'should return integers in the range (0, 10], each number with a 10% chance',
                                (done) => {
                                    const percents = generate(
                                        () => {
                                            return Randomly.getRandomInt(0, 10, {
                                                includeMin : false,
                                                includeMax : true,
                                            });
                                        },
                                        (value) => {
                                            assert.equal(10, value);
                                        }
                                    );

                                    assert.deepEqual(
                                        getNumbers(percents),
                                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                                    );

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomInt(0, 10, { includeMin: false, includeMax: false })',
                        () => {
                            it(
                                'should return integers in the range (0, 10), each number with a 11.1% chance',
                                (done) => {
                                    const percents = generate(
                                        () => {
                                            return Randomly.getRandomInt(0, 10, {
                                                includeMin : false,
                                                includeMax : false,
                                            });
                                        },
                                        (value) => {
                                            assert.equal(11.1, value);
                                        }
                                    );

                                    assert.deepEqual(
                                        getNumbers(percents),
                                        [1, 2, 3, 4, 5, 6, 7, 8, 9]
                                    );

                                    done();
                                }
                            ).timeout(0);
                        }
                    );
                }
            );

            describe(
                'in less common cases',
                () => {
                    describe(
                        'when calling .getRandomInt(-5, 5)',
                        () => {
                            it(
                                'should return integers in the range [-5, 5), each number with a 10% chance',
                                (done) => {
                                    const percents = generate(
                                        () => {
                                            return Randomly.getRandomInt(-5, 5);
                                        },
                                        (value) => {
                                            assert.equal(10, value);
                                        }
                                    );

                                    assert.deepEqual(
                                        getNumbers(percents),
                                        [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]
                                    );

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomInt(-10, 0)',
                        () => {
                            it(
                                'should return integers in the range [-10, 0), each number with a 10% chance',
                                (done) => {
                                    const percents = generate(
                                        () => {
                                            return Randomly.getRandomInt(-10, 0);
                                        },
                                        (value) => {
                                            assert.equal(10, value);
                                        }
                                    );

                                    assert.deepEqual(
                                        getNumbers(percents),
                                        [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]
                                    );

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomInt(-10, -5)',
                        () => {
                            it(
                                'should return integers in the range [-10, -5), each number with a 20% chance',
                                (done) => {
                                    const percents = generate(
                                        () => {
                                            return Randomly.getRandomInt(-10, -5);
                                        },
                                        (value) => {
                                            assert.equal(20, value);
                                        }
                                    );

                                    assert.deepEqual(
                                        getNumbers(percents),
                                        [-10, -9, -8, -7, -6]
                                    );

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomInt(-1, 1)',
                        () => {
                            it(
                                'should return integers in the range [-1, 1), which are -1s and 0s with 50% chance',
                                (done) => {
                                    const percents = generate(
                                        () => {
                                            return Randomly.getRandomInt(-1, 1);
                                        },
                                        (value) => {
                                            assert.equal(50, value);
                                        }
                                    );

                                    assert.deepEqual(
                                        getNumbers(percents),
                                        [-1, 0]
                                    );

                                    done();
                                }
                            ).timeout(0);
                        }
                    );
                }
            );

            describe(
                'in extreme cases',
                () => {
                    describe(
                        'when calling .getRandomInt(0, 0)',
                        () => {
                            it(
                                'should throw an error, the minimum and maximum cannot be equal',
                                () => {
                                    assert.throws(
                                        () => {
                                            Randomly.getRandomInt(0, 0);
                                        },
                                        'Minimum (0) and maximum (0) cannot be equal.'
                                    );
                                }
                            )
                        }
                    );

                    describe(
                        'when calling .getRandomInt(1, 0)',
                        () => {
                            it(
                                'should throw an error, the minimum cannot be larger, than the maximum',
                                () => {
                                    assert.throws(
                                        () => {
                                            Randomly.getRandomInt(1, 0);
                                        },
                                        'Minimum (1) cannot be larger, than maximum (0).'
                                    );
                                }
                            )
                        }
                    );

                    describe(
                        'when calling .getRandomInt(0, 1, { includeMin: false, includeMax: true })',
                        () => {
                            it(
                                'should throw an error, no possible integer in the range (0, 1]',
                                () => {
                                    assert.throws(
                                        () => {
                                            Randomly.getRandomInt(0, 1, {
                                                includeMin : false,
                                                includeMax : true,
                                            });
                                        },
                                        'Minimum is excluded, no possible integer in the range (0, 1].'
                                    );
                                }
                            )
                        }
                    );

                    describe(
                        'when calling .getRandomInt(-1, 0)',
                        () => {
                            it(
                                'should throw an error, no possible integer in the range [-1, 0)',
                                () => {
                                    assert.throws(
                                        () => {
                                            Randomly.getRandomInt(-1, 0);
                                        },
                                        'Maximum is excluded, no possible integer in the range [-1, 0).'
                                    );
                                }
                            )
                        }
                    );

                    describe(
                        'when calling .getRandomInt(0, 1, { includeMin: false, includeMax: false})',
                        () => {
                            it(
                                'should throw an error, no possible integer in the range (0, 1)',
                                () => {
                                    assert.throws(
                                        () => {
                                            Randomly.getRandomInt(0, 1, {
                                                includeMin : false,
                                                includeMax : false,
                                            });
                                        },
                                        'Minimum and maximum are excluded, no possible integer in the range (0, 1).'
                                    );
                                }
                            )
                        }
                    );
                }
            );
        }
    );
};
