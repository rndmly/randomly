/* eslint no-magic-numbers: 0 */

'use strict';


const assert = require('chai').assert;


module.exports = (Randomly, utils) => {
    const SampleGenerator = utils.SampleGenerator;

    const generator = new SampleGenerator({
        size   : 22500000,
        caster : (s) => Object.keys(s).sort().reverse().map((v) => v === 'true'),
    });

    describe(
        '.getRandomBool()',
        () => {
            describe(
                'in general cases',
                () => {
                    describe(
                        'when calling .getRandomBool() with default arguments',
                        () => {
                            it(
                                'should return boolean values [true, false], each value with a 50% chance',
                                (done) => {
                                    const generated = generator.generateWith({
                                        generator : ()  => Randomly.getRandomBool(),
                                        tester    : (v) => assert.equal(50, v),
                                    });

                                    assert.deepEqual(generated.values, [true, false]);

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomBool(0)',
                        () => {
                            it(
                                'should return false 100% of the time',
                                (done) => {
                                    const generated = generator.generateWith({
                                        generator : ()  => Randomly.getRandomBool(0),
                                        tester    : (v) => assert.equal(100, v),
                                    });

                                    assert.deepEqual(generated.values, [false]);

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomBool(0.25)',
                        () => {
                            it(
                                'should return boolean values [true, false], true with 25%, false with 75% chances',
                                (done) => {
                                    const generated = generator.generateWith({
                                        generator : ()  => Randomly.getRandomBool(0.25),
                                        tester    : (v) => assert.include([25, 75], v),
                                    });

                                    assert.deepEqual(generated.values, [true, false]);

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomBool(0.5)',
                        () => {
                            it(
                                'should return boolean values [true, false], both true and false with 50% chances',
                                (done) => {
                                    const generated = generator.generateWith({
                                        generator : ()  => Randomly.getRandomBool(0.5),
                                        tester    : (v) => assert.equal(50, v),
                                    });

                                    assert.deepEqual(generated.values, [true, false]);

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomBool(0.75)',
                        () => {
                            it(
                                'should return boolean values [true, false], true with 75%, false with 25% chances',
                                (done) => {
                                    const generated = generator.generateWith({
                                        generator : ()  => Randomly.getRandomBool(0.75),
                                        tester    : (v) => assert.include([25, 75], v),
                                    });

                                    assert.deepEqual(generated.values, [true, false]);

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomBool(1)',
                        () => {
                            it(
                                'should return true 100% of the time',
                                (done) => {
                                    const generated = generator.generateWith({
                                        generator : ()  => Randomly.getRandomBool(1),
                                        tester    : (v) => assert.equal(100, v),
                                    });

                                    assert.deepEqual(generated.values, [true]);

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
                        'when calling .getRandomBool(0.01)',
                        () => {
                            it(
                                'should return boolean values [true, false], true with 1%, false with 99% chances',
                                (done) => {
                                    const generated = generator.generateWith({
                                        generator : ()  => Randomly.getRandomBool(0.01),
                                        tester    : (v) => assert.include([1, 99], v),
                                    });

                                    assert.deepEqual(generated.values, [true, false]);

                                    done();
                                }
                            ).timeout(0);
                        }
                    );

                    describe(
                        'when calling .getRandomBool(0.99)',
                        () => {
                            it(
                                'should return boolean values [true, false], true with 99%, false with 1% chances',
                                (done) => {
                                    const generated = generator.generateWith({
                                        generator : ()  => Randomly.getRandomBool(0.99),
                                        tester    : (v) => assert.include([1, 99], v),
                                    });

                                    assert.deepEqual(generated.values, [true, false]);

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
                        'when calling .getRandomBool(*) with invalid arguments',
                        () => {
                            it(
                                'should return boolean values [true, false], each value with a 50% chance',
                                (done) => {
                                    const args = [
                                              undefined,
                                              null,
                                              true,
                                              false,
                                              '',
                                              '0',
                                              '1',
                                              NaN,
                                              -Infinity,
                                              Infinity,
                                              {},
                                              [],
                                              /\s/g,
                                              new Date(),
                                          ],
                                          len = args.length;

                                    const generated = generator.generateWith({
                                        size : 15000000,
                                        generator : ()  => Randomly
                                            .getRandomBool(args[Math.floor(Math.random() * len)]
                                        ),
                                        tester : (v) => assert.equal(50, v),
                                    });

                                    assert.deepEqual(generated.values, [true, false]);

                                    done();
                                }
                            ).timeout(0);
                        }
                    );
                }
            );
        }
    );
};
