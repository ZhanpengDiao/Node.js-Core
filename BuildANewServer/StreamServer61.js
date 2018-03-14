/**
 * Created by ZhanpengDiao on 26/6/17.
 */
var http = require('http')
var fs = require('fs') // file module

// this works like a mini server: get request and send response
// function: event listener
// emitter: 'request'
// http parser inside js give req
http.createServer(function(req, res) { // provide a callback

    // status code, name-value pairs
    res.writeHead(200, { 'Content-Type': 'text/html' })

    // res is the writable stream
    // just directly create a pipe
    // rather than pull the entire file in a buffer and send
    fs.createReadStream('./index.html').pipe(res)

    // listen to the port
    // 127.0.0.1 standard internal IP for local address: localhost
}).listen(1337, '127.0.0.1')