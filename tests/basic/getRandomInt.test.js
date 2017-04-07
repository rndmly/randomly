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

    const len      = Object.keys(vals).length,
          percents = {};

    for (let key in vals) {
        if (vals.hasOwnProperty(key)) {
            const value = vals[key];

            percents[key] = Math.round(value  / size * (len * 10));
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


module.exports = (Randomly) => {
    describe(
        '.getRandomInt()',
        () => {
            describe(
                '() - call with defaults',
                () => {
                    it(
                        'should return integers in the range [0, Number.MAX_SAFE_INTEGER)',
                        (done) => {
                            let value;

                            for (let i = 0; i < 25000000; i++) {
                                value = Randomly.getRandomInt();

                                if (value === 0) {
                                    assert.notEqual(value, 0);
                                }

                                if (value === Number.MAX_SAFE_INTEGER) {
                                    assert.notEqual(value, Number.MAX_SAFE_INTEGER);
                                }
                            }

                            done();
                        }
                    ).timeout(0);
                }
            );

            describe(
                '(0, 10)',
                () => {
                    it(
                        'should return integers in the range [0, 10), each number with a 10% chance',
                        (done) => {
                            generate(
                                () => {
                                    return Randomly.getRandomInt(0, 10);
                                },
                                (value) => {
                                    assert.equal(10, value);
                                }
                            );

                            done();
                        }
                    ).timeout(0);
                }
            );

            describe(
                '(0, 10, includeMin:true, includeMax:false)',
                () => {
                    it(
                        'should return integers in the range [0, 10), each number with a 10% chance',
                        (done) => {
                            generate(
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

                            done();
                        }
                    ).timeout(0);
                }
            );

            describe(
                '(0, 10, includeMin:true, includeMax:true)',
                () => {
                    it(
                        'should return integers in the range [0, 10], each number with a 10% chance',
                        (done) => {
                            generate(
                                () => {
                                    return Randomly.getRandomInt(0, 10, {
                                        includeMin : true,
                                        includeMax : true,
                                    });
                                },
                                (value) => {
                                    assert.equal(10, value);
                                }
                            );

                            done();
                        }
                    ).timeout(0);
                }
            );

            describe(
                '(0, 10, includeMin:false, includeMax:true)',
                () => {
                    it(
                        'should return integers in the range (0, 10], each number with a 10% chance',
                        (done) => {
                            generate(
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

                            done();
                        }
                    ).timeout(0);
                }
            );

            describe(
                '(0, 10, includeMin:false, includeMax:false)',
                () => {
                    it(
                        'should return integers in the range (0, 10), each number with a 10% chance',
                        (done) => {
                            generate(
                                () => {
                                    return Randomly.getRandomInt(0, 10, {
                                        includeMin : false,
                                        includeMax : false,
                                    });
                                },
                                (value) => {
                                    assert.equal(10, value);
                                }
                            );

                            done();
                        }
                    ).timeout(0);
                }
            );

            describe(
                'Extreme Cases',
                () => {
                    describe(
                        'Bound Checks',
                        () => {
                            describe(
                                '(0, 0)',
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
                                '(1, 0)',
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
                                '(0, 1, includeMin:false, includeMax:true)',
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
                                '(0, 1, includeMin:true, includeMax:false)',
                                () => {
                                    it(
                                        'should throw an error, no possible integer in the range [0, 1)',
                                        () => {
                                            assert.throws(
                                                () => {
                                                    Randomly.getRandomInt(0, 1, {
                                                        includeMin : true,
                                                        includeMax : false,
                                                    });
                                                },
                                                'Maximum is excluded, no possible integer in the range [0, 1).'
                                            );
                                        }
                                    )
                                }
                            );

                            describe(
                                '(0, 1, includeMin:false, includeMax:false)',
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
                                                'Minimum and maximum are excluded, ' +
                                                'no possible integer in the range (0, 1).'
                                            );
                                        }
                                    )
                                }
                            );
                        }
                    );
                }
            );
        }
    );
};
