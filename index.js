const http = require('http');
const fs = require('fs');

// const hostname = '127.0.0.1';
const port = 8080;

const home = fs.readFileSync('./index.html');
const appointment = fs.readFileSync('./appointment.html');

const server = http.createServer((req, res) => {

    console.log(req.url);
    url = req.url;

    res.writeHead(200, {'content-Type' : 'text/html'});
    if(url == '/') {
        res.end(home);
    }
    else if (url == '/appointment.html') {
        res.end(appointment);
    }
    else {
        res.statusCode = 404;
        res.end('<h1>404 page not found</h1>')
    }
});

server.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
});

