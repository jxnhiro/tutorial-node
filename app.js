const { readFile, writeFile } = require('fs').promises;
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//     return new Promise(
//         (resolve, reject)=>{
//             readFile(path,'utf8',
//                 (err, data) => {
//                     if (err) {
//                         reject(err);
//                     } else {
//                         resolve(data);
//                     }
//                 }
//             )
//         }
//     )
// }

// Unclean code for promises.
// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))



const start = async() => {
    //Async Await Approach, must put in try or catch in error.
   try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFile('./content/result-mind-grenade.txt', `${first} + ${second}`);
    console.log(first, second);
   } catch (error) {    
    console.log(error);
   }
}

start()
