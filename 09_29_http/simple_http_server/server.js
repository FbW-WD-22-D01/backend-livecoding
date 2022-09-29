const http = require('http');

const port = 8080;

let app = http.createServer((request, response) => {
    const {headers, method, url} = request;

    console.log(headers)
    console.log(method)
    console.log(url)

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<html><body><h1>Hallo Welt<h1></body></html>");
    response.end();
});

console.log('Server Listening on port:', port)

app.listen(port);