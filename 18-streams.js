const { createReadStream } = require('fs');

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})
// const stream = createReadStream('../content/big.txt', {encoding: utf-8})
const stream = createReadStream('./content/big-file.txt', {
    highWaterMark: 8000,
    encoding: 'utf-8'
});

//The event name is data, try with other method names, it won't work.
stream.on('data', (result) => {
    console.log(`${result}`)
})

stream.on('error', (err) => {
    console.log(err);
})

/**
 * There are 4 types of Streams
 * Writeable
 * Readable
 * Duplex
 * Transform
 * 
 * Streams also extend EventEmitter
 */

