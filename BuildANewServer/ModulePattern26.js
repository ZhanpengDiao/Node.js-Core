/**
 * Created by ZhanpengDiao on 26/6/17.
 */

module.exports = function() {
    console.log("pattern 1")
}

// ==================================

// add a function to exports object
module.exports.greet = function() {
    console.log("pattern 2")
}

// ==================================

// this is constructor
// NOTE: SINCE MODULES ARE CACHED, SO THERE IS ONLY ONE "INSTANCE"
function Greetr() {
    this.greet = function() {
        console.log("pattern 3")
    }
}

module.exports = new Greetr()

// ==================================

function Greetr() {
    this.greet = function() {
        console.log("pattern 4")
    }
}

module.exports = Greetr()
