const {readFileSync, writeFileSync} = require('fs');

//Alternative:
// const fs = require('fs');

//. is current directory
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
// console.log(first);

//Reading and Writing File

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'},
);

