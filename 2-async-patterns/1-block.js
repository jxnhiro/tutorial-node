//Code to block the asynchronous.

const http = require('http');

const server = http.createServer(
    (req, res) => {
        if (req.url === '/about'){
            // TODO: Blocking code: For Loop
            for (let i = 0; i < 1000; i++){
                for (let j = 0; j < 1000; j++){
                    console.log(`${i} ${j}`);
                }
            }
            res.end('You are in the about route.')
        }
        if (req.url === '/'){
            res.end('You are in the home page.')
        } else {
            res.end('You are in home')
        }
    }
)

server.listen(
    8000,
    ()=>{
        console.log('Server is listening on port 5000');
    }
)