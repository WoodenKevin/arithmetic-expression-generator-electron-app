const fs = require('fs');
const path = require('path');
const process = require('process');

let writeContentToFile = (filename, content) => {
    try {
        fs.writeFile(
            path.join(process.cwd() + `/${filename}`),
            content,
            err => {
                return {
                    status: 'error',
                    message: err,
                };
            }
        );
    } catch (err) {
        return {
            status: 'error',
            message: err,
        };
    }

    return {
        status: 'ok',
    };
};

module.exports = {
    writeContentToFile,
};
