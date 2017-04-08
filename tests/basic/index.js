'use strict';

module.exports = (Randomly) => {
    describe(
        '.basic',
        () => {
            [
                require('./getRandomBool.test'),
                require('./getRandomInt.test'),
                require('./getRandomFloat.test'),

            ].forEach(
                (module) => {
                    module(Randomly);
                }
            );
        }
    );
};
