/* eslint no-magic-numbers: 0 */

'use strict';


const assert = require('chai').assert;


module.exports = (Randomly, utils) => {
    const SampleGenerator = utils.SampleGenerator;

    const generator = new SampleGenerator({
        size   : 22500000,
        caster : (s) => Object.keys(s).map(Number).sort((a, b) => a - b),
    });

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
                                    const len = 30000000;

                                    let sum = 0;

                                    for (let i = 0; i < len; i++) {
                                        sum += Randomly.getRandomInt();
                                    }

                                    let avg  = sum / len,
                                        bias = Math.round(avg / (Number.MAX_SAFE_INTEGER / 2) * 50) / 100;

                                    // if the random integers in the range [0, Number.MAX_SAFE_INTEGER)
                                    // are uniquely distributed (AMAP), the average will be ~4503599627370496,
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
                                    const generated = generator.generateWith({
                                        generator : ()  => Randomly.getRandomInt(0, 10),
                                        tester    : (v) => assert.equal(10, v),
                                    });

                                    assert.deepEqual(
                                        generated.values,
                                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                                    );

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomInt(0, 10, {includeMin: true, includeMax: false})',
                        () => {
                            it(
                                'should return integers in the range [0, 10), each number with a 10% chance',
                                (done) => {
                                    const generated = generator.generateWith({
                                        generator : () => Randomly
                                            .getRandomInt(0, 10, {includeMin: true, includeMax: false}
                                        ),
                                        tester : (v) => assert.equal(10, v),
                                    });

                                    assert.deepEqual(
                                        generated.values,
                                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                                    );

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomInt(0, 10, {includeMin: true, includeMax: true})',
                        () => {
                            it(
                                'should return integers in the range [0, 10], each number with a 9.1% chance',
                                (done) => {
                                    const generated = generator.generateWith({
                                        generator : () => Randomly
                                            .getRandomInt(0, 10, {includeMin: true, includeMax: true}
                                        ),
                                        tester : (v) => assert.equal(9.1, v),
                                    });

                                    assert.deepEqual(
                                        generated.values,
                                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                                    );

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomInt(0, 10, {includeMin: false, includeMax: true})',
                        () => {
                            it(
                                'should return integers in the range (0, 10], each number with a 10% chance',
                                (done) => {
                                    const generated = generator.generateWith({
                                        generator : () => Randomly
                                            .getRandomInt(0, 10, {includeMin: false, includeMax: true}
                                        ),
                                        tester : (v) => assert.equal(10, v),
                                    });

                                    assert.deepEqual(
                                        generated.values,
                                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                                    );

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomInt(0, 10, {includeMin: false, includeMax: false})',
                        () => {
                            it(
                                'should return integers in the range (0, 10), each number with a 11.1% chance',
                                (done) => {
                                    const generated = generator.generateWith({
                                        generator : () => Randomly
                                            .getRandomInt(0, 10, {includeMin: false, includeMax: false}
                                        ),
                                        tester : (v) => assert.equal(11.1, v),
                                    });

                                    assert.deepEqual(
                                        generated.values,
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
                                    const generated = generator.generateWith({
                                        size      : 7000000,
                                        generator : () => Randomly.getRandomInt(-5, 5),
                                        tester    : (v) => assert.equal(10, v),
                                    });

                                    assert.deepEqual(
                                        generated.values,
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
                                    const generated = generator.generateWith({
                                        size      : 5000000,
                                        generator : () => Randomly.getRandomInt(-10, 0),
                                        tester    : (v) => assert.equal(10, v),
                                    });

                                    assert.deepEqual(
                                        generated.values,
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
                                    const generated = generator.generateWith({
                                        size      : 5000000,
                                        generator : () => Randomly.getRandomInt(-10, -5),
                                        tester    : (v) => assert.equal(20, v),
                                    });

                                    assert.deepEqual(
                                        generated.values,
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
                                    const generated = generator.generateWith({
                                        size      : 7000000,
                                        generator : () => Randomly.getRandomInt(-1, 1),
                                        tester    : (v) => assert.equal(50, v),
                                    });

                                    assert.deepEqual(
                                        generated.values,
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
                                        () => Randomly.getRandomInt(0, 0),
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
                                        () => Randomly.getRandomInt(1, 0),
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
                                        () => Randomly.getRandomInt(0, 1, {includeMin : false, includeMax : true}),
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
                                        () => Randomly.getRandomInt(-1, 0),
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
                                        () => Randomly.getRandomInt(0, 1, {includeMin : false, includeMax : false}),
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
