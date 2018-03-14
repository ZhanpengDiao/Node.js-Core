/**
 * Created by ZhanpengDiao on 24/6/17.
 */
var http = require('http')
var fs = require('fs') // file module

http.createServer(function(req, res) { // provide a callback

    // status code, name-value pairs
    res.writeHead(200, { 'Content-Type': 'application/json' })

    var jsobj = {
        firstName: "Zhanpeng",
        lastName: "Diao"
    }

    // serialize and deserialize
    res.end(JSON.stringify(jsobj))

    // listen to the port
    // 127.0.0.1 standard internal IP for local address: localhost
}).listen(1337, '127.0.0.1')/**
 * Created by ZhanpengDiao on 26/6/17.
 */
