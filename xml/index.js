const fs = require('fs');
const {jsdom} = require('node-jsdom');

function createDoc(xml) {
    const doc = jsdom(xml, {
        parsingMode: 'xml',
    });
    return doc;
}

function createNode(xml) {
    return createDoc(xml).childNodes[0];
}

function readXMLFile(file) {
    const xml = fs.readFileSync(file, 'utf8');
    return createDoc(xml);
}

module.exports = {
    createDoc,
    createNode,
    readXMLFile,
};
