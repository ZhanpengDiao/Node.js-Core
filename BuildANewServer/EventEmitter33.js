/**
 * Created by ZhanpengDiao on 25/6/17.
 */
// see an event happened, and respond to the event: listener
// a simplified verison of emitter

// constructor
function Emitter() {
    this.events = {};
}


Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || []; // AMAZING use of syntax
    this.events[type].push(listener);

}

// sth happened
Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function(listener) { // execute every listener
            listener()
        })
    }
}

// module.exports = Emitter;
var emtr = new Emitter()

emtr.on('greet', function() { // greet is the name of event
    console.log('greet received: someone said hello')
})

emtr.on('greet', function() { // greet is the name of event
    console.log("this is the second listener")
})

// greet happened
emtr.emit('greet')

// offical version
var InnerEmitter = require('events')
var emtr2 = new InnerEmitter()