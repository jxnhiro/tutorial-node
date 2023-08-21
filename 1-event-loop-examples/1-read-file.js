const { readFile } = require('fs')

console.log('started the first task');

readFile(
    './content/first.txt', 
    'utf8',
    (err, result) => {
        if (err) {
            console.log(err);
            return
        } else {
            console.log(result);
        }
        console.log('completed first task.');
    }
)

readFile(
    './content/second.txt', 
    'utf8',
    (err, result) => {
        if (err) {
            console.log(err);
            return
        } else {
            console.log(result);
        }
        console.log('completed second task.');
    }
)

console.log('starting next task');