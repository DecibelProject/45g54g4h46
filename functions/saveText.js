const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { text } = JSON.parse(event.body);
    const filename = `text_${Date.now()}.txt`;
    const filePath = path.join('/tmp', filename); // Use `/tmp` for serverless environments

    fs.writeFileSync(filePath, text);

    return { statusCode: 200, body: 'Text saved successfully!' };
};
