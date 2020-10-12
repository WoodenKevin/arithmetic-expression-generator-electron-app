/* eslint-disable no-useless-escape */
const { generate } = require('./arithmetic-expression-generator.node');

const patt = /^\([^\(|\)]+\)$/g;

let generator = (expressionTotal, valueUpperLimit) => {
    let res = [];

    try {
        res = generate(expressionTotal, valueUpperLimit);
    } catch (err) {
        res = [];
    }

    res.forEach((obj, index) => {
        let { expression } = obj;

        if (expression && patt.test(expression)) {
            res[index].expression = expression
                .replace(/\(/g, '')
                .replace(/\)/g, '');
        }
    });

    return res;
};

module.exports = {
    generator,
};
