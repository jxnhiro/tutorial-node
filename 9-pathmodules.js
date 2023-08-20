const path = require('path')

//What is the seperator for path?
console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath);

//The last destination after the directory is the test.txt
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);