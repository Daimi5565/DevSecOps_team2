const http = require('http');

const hostname = '0.0.0.0'; // Allows the server to accept requests from any IP
const port = 8081; // Port number to listen on

const server = http.createServer((req, res) => {
    res.statusCode = 200; // Set the response status code to 200 (OK)
    res.setHeader('Content-Type', 'text/plain'); // Set the Content-Type header
    res.end('Hello World\n'); // Send the response
});

// Start the server and listen on the specified port
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); // Log the server URL
});

