const http = require('http');

//Callback function is after the server is made, so after the first bracket, the ending, would be the next req or res.
const server = http.createServer(
    (req, res) => {
        if (req.url === '/'){
            res.end('Welcome to our home page.')
        }
        if (req.url === '/about'){
            res.end('Here is our short history.')
        }
        else{
            res.end(
                `
                <h1>Oops!</h1>
                <p>We can't seem to find the page you are looking for.</p>
                <a href="/">Back Home</a>
                `
            )
        }
    }
)

server.listen(5000);