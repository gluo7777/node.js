/**
 * web server using node.js
 * Run: node first-app.js
 */

// import http module
const http = require('http');
// network endpoints
const hostname = 'localhost';
const port = 3000;

// init request handler
function handleRoot(req, res) {
    console.log(`Request: ${req}`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hey this is William's first node.js application!\n`);
    console.log(`Response: ${res}`);
};
// init server object
const server = http.createServer(handleRoot);

// init server start up handler
function startup() {
    console.log(`Server is running at http://${hostname}:${port}/`);
}
// run server and add port listener
server.listen(port, hostname, startup);
