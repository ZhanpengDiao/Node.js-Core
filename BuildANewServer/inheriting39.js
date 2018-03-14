/**
 * Created by ZhanpengDiao on 25/6/17.
 */
var util = require('util')

function Person() {
    this.firstName = "first_name"
    this.lastName = "last_name"
}

Person.prototype.greet = function() {
    console.log("hello! " + this.firstName + " " + this.lastName)
}

function Policeman() {
    this.badgeNumber = "1234"
}

util.inherits(Policeman, Person) // inherits only connect prototypes:
                                 // policeman.prototype = object.create(person.prototype)
                                 // sth defined inside function may not be accessed: firstName, lastName
var police1 = new Policeman()
police1.greet() // return undefined

function FireMan() {
    Person.call(this) // <------ this is the key, like super() in many other language
                      // provide access to many fields of the parent class
    this.crewNumber ="5678"
}

util.inherits(FireMan, Person)
var fireman1 = new FireMan()
fireman1.greet()
