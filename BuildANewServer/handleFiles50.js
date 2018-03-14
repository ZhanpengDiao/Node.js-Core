/**
 * Created by ZhanpengDiao on 24/6/17.
 */
// directly handle files
var fs = require('fs')

// __dirname: argument passed in when running
// console.log(__dirname)

// utf8: binary -> chars
// if there is a big butter for many users if no utf8
var greet = fs.readFileSync(__dirname+ '/greet.txt', 'utf8')
// console.log(greet)

// Async
// libuv do the work: reading file
// when finish reading file, run the callbacku error-first callback by default, null if no error or an object defining error
var greet2 = fs.readFile(__dirname + "/greet.txt", function(err, data) {
    console.log(data) //callback runs when readFile finish work
})

console.log('Done!')