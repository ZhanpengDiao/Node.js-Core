/**
 * Created by ZhanpengDiao on 25/6/17.
 */
var fs = require('fs')

// break a file into pieces

// buffering
// highWaterMark: set the size of a buffer
var readable = fs.createReadStream(__dirname + "/greet.txt",
    { encoding: 'utf8', highWaterMark: 1 * 1024}) // 1 * 1024 bytes

var writeable = fs.createWriteStream(__dirname + "/greetwrite.txt")

// every time it emit the buffer, it envoke the listener
// it seems the 'data' event has been fixed
readable.on('data', function(chunk) {
    console.log("=====envoke=====")
    console.log(chunk.length)
    writeable.write(chunk)
})
