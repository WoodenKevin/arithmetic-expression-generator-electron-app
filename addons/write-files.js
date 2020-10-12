const fs = require('fs');
const path = require('path');

let writeContentToFile = (filename, content) => {
    let filepath = path.join(__dirname + `/${filename}`);

    try {
        fs.writeFile(filepath, content, err => {
            return {
                status: 'error',
                message: err,
            };
        });
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
