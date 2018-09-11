var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World99\n');
}).listen(8808, '127.0.0.1');
console.log('Server 33ddd3 running at http://127.0.0.1:8808');