/**
 * Created by ZhanpengDiao on 25/6/17.
 */
var fs = require('fs')
var zlib = require('zlib') // gzip

// break a file into pieces

// buffering
// highWaterMark: set the size of a buffer
var readable = fs.createReadStream(__dirname + "/greet.txt")

var writeable = fs.createWriteStream(__dirname + "/greetwrite.txt")

var compressed = fs.createWriteStream(__dirname + "/greetwrite.txt.gz")

var gzip = zlib.createGzip() // create transform stream: both readable and writable
                             // return a STREAM
                             // since it is a readable, can be piped to other places

// every time it emit the buffer, it envoke the listener
// it seems the 'data' event has been fixed
// !!!!!! readable.prototype.pipe = function(dest, ..) return dest: dest is a writable obj. this func return dest at the end
readable.pipe(writeable) // this is the same as Stream51: readable.on listening to 'data' event

readable.pipe(gzip).pipe(compressed) // compress it!
                                     // return stream: both r & w
                                     // chaining: method following another method
