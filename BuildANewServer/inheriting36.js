/**
 * Created by ZhanpengDiao on 25/6/17.
 */
var Emitter = require('events')
var util = require('util')

function Greetr() {
    this.greeting = "Hello!"
}

util.inherits(Greetr, Emitter)

// prototype is like an instance of a super class prototype:
// --> cotr.prototype = object.create(super.prototype)
// cotr - prototype - super
Greetr.prototype.greet = function(data) {
    console.log(this.greeting)
    this.emit('greet', data)
}

var greeter = new Greetr();

greeter.on('greet', function(data) {
    console.log("greet received: " + data)
})

greeter.greet("ha?")