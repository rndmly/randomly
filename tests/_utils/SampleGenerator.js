/* eslint no-magic-numbers: 0 */

"use strict";


/**
 * @typedef {Object|null} SampleGeneratorOptions
 *
 * @property {int}      size      - The size of the generated sample
 * @property {function} generator - The generator callback, that returns the values during the sample generation.
 * @property {function} tester    - The tester callback, that checks the generated sample.
 * @property {function} caster    - The caster callback, that extracts and converts the actual values
 *                                  of the generated sample.
 */


/**
 * @typedef {Object} GeneratedSampleObject
 *
 * @property {Object} sample - The generated sample.
 * @property {Array}  values - The values of the generated sample.
 */


/**
 * Generates a sample using the customizable options.
 */
class SampleGenerator
{

    static factory()
    {
        return new SampleGenerator();
    }


    /**
     * Constructs the SampleGenerator.
     *
     * @param {SampleGeneratorOptions} [options=null] - The options to generate the sample with.
     */
    constructor(options)
    {
        this.setOptions(options);
    }


    getSize()
    {
        return this._size;
    }


    setSize(size)
    {
        this._size = size;

        return this;
    }


    getGenerator() {
        return this._generator;
    }


    setGenerator(fn) {
        this._generator = fn;

        return this;
    }


    getTester() {
        return this._tester;
    }


    setTester(fn) {
        this._tester = fn;

        return this;
    }


    getCaster() {
        return this._caster;
    }


    setCaster(fn) {
        this._caster = fn;

        return this;
    }


    /**
     * Set the options of the SampleGenerator.
     *
     * @param {SampleGeneratorOptions} options - The options to generate the sample with.
     */
    setOptions(options)
    {
        options = options && typeof options === 'object' ? options : {};

        if (options.size) {
            this.setSize(options.size);
        }

        if (options.generator) {
            this.setGenerator(options.generator);
        }

        if (options.tester) {
            this.setTester(options.tester);
        }

        if (options.caster) {
            this.setCaster(options.caster);
        }
    }


    /**
     * Generates the sample.
     *
     * @returns {GeneratedSampleObject}
     */
    generate()
    {
        const size      = this._size,
              generator = this._generator,
              tester    = this._tester,
              caster    = this._caster;

        // generate values using the generator function
        const values = {};

        for (let i = 0; i < size; i++) {
            let key = generator();

            if (!(key in values)) {
                values[key] = 0;
            }

            ++values[key];
        }

        // create the sample by calculating the percent of the generated values
        const sample = {};

        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                const value = values[key];

                sample[key] = Math.round(value / size * 1000) / 10;
            }
        }

        // run the tester function on the generated sample
        for (let key in sample) {
            if (sample.hasOwnProperty(key)) {
                const value = sample[key];

                tester(value);
            }
        }

        return {
            sample : sample,
            values : caster(sample),
        };
    }


    /**
     * Generate the sample with custom options.
     *
     * @param {SampleGeneratorOptions} options - The options to generate the sample with.
     *
     * @returns {GeneratedSampleObject}
     */
    generateWith(options)
    {
        this.setOptions(options);

        return this.generate();
    }
}

module.exports = SampleGenerator;
