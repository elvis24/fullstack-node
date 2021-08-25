/*'use strict'

var http = require('http')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello Word\n')
}).listen(1337, "127.0.0.1")

console.log('Server running at http://127.0.0.1:1337/')
*/

'use strict'

var http = require('http')

function webServer(req,res){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<h1>Welcom to NODE.JS</h1>')
}

http
    .createServer(webServer)
    .listen(3000, 'localhost')

console.log('Servidor corriendo en http://localhost:3000/')