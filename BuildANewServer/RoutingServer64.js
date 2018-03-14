/**
 * Created by ZhanpengDiao on 24/6/17.
 */
var http = require('http')
var fs = require('fs') // file module

http.createServer(function(req, res) { // provide a callback

    if(req.url === "/") {
        fs.createReadStream(__dirname + "/index.html").pipe(res)
    } else if(req.url === "/json") {
        // status code, name-value pairs
        res.writeHead(200, {'Content-Type': 'application/json'})

        var jsobj = {
            firstName: "Zhanpeng",
            lastName: "Diao"
        }

        // serialize and deserialize
        res.end(JSON.stringify(jsobj))
    } else {
        res.writeHead(404)
        res.end
    }
    // listen to the port
    // 127.0.0.1 standard internal IP for local address: localhost
}).listen(1337, '127.0.0.1')
