const { readFile, writeFile } = require('fs');

//After an event is done, we run a call back function.

//Callback Hell
readFile(
    './content/first.txt', 
    'utf-8',
    (err, result)=>{
        if (err) {
            console.log(err);
            return;
        } else {
            const first = result;
            readFile(
                './content/second.txt',
                'utf-8',
                (err, result) => {
                    if (err){
                        console.log(err);
                        return;
                    } else {
                        const second = result;
                        writeFile(
                            './content/result-async.txt',
                            `Here is the result: ${first}, ${second}`,
                            (err, result) => {
                                if (err){
                                    console.log(err);
                                } else {
                                    console.log(result);
                                }
                            }
                        )
                    }
                }
            )
        }
    }
);