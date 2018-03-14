/**
 * Created by ZhanpengDiao on 24/6/17.
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

    // this return a buffer if do without 'utf8'
    // res.writeHead(200, { 'Content-Type': 'application/json' })
    var html = fs.readFileSync('./index.html', 'utf8')

    // template will be embeded in html
    var template = "this is the template replaced by js code"

    html = html.replace('{template}', template)

    // end sending : content
    res.end(html)

    // listen to the port
    // 127.0.0.1 standard internal IP for local address: localhost
}).listen(1337, '127.0.0.1')