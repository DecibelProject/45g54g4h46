const fs = require('fs');
const path = require('path');

exports.handler = async () => {
    const files = fs.readdirSync('/tmp');
    const texts = files
        .filter(file => file.endsWith('.txt'))
        .map(file => fs.readFileSync(path.join('/tmp', file), 'utf8'));

    return { statusCode: 200, body: JSON.stringify(texts) };
};
