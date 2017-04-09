'use strict';


module.exports = (requireModules) => {
    describe(
        '.basic',
        () => {
            requireModules(
                [
                    './basic/getRandomBool.test',
                    './basic/getRandomInt.test',
                    './basic/getRandomFloat.test',
                ],
                true
            );
        }
    );
};
