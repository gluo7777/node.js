const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    const { method, url, headers } = req;
    console.log(`HTTP Method:${method}\nURL:${url}`);
    // headers always converted to lowercase
    console.log(`User agent:${headers['user-agent']}`);
    console.log(`Headers:${headers['rawHeaders']}`);
    res.on('error', err => console.error(err));
    if (method === 'GET') {
        if (url === '/') {
            fs.readFile('index.html', (error, page) => {
                if (error) {
                    res.statusCode = 404;
                    res.end();
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.write(page);
                    res.end();
                }
            });
        } else if (url.match(/\/.*\.js/)) {
            const jsfile = url.substr(1);
            // need validation here
            fs.readFile(jsfile, (error, page) => {
                if (error) {
                    res.statusCode = 404;
                    res.end();
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/javascript');
                    res.write(page);
                    res.end();
                }
            });
        } else {
            fs.readFile('error.html', (error, page) => {
                if (error) {
                    res.statusCode = 404;
                    res.end();
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.write(page);
                    res.end();
                }
            });
        }
    } else {
        res.statusCode = 404;
        res.end();
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});