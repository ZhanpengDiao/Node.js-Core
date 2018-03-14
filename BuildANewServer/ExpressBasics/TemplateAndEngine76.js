/**
 * Created by ZhanpengDiao on 26/6/17.
 */
var express = require("express")

// this returns a function include many params: node_modules/express/lib/express.js
var app = express()

// by default express will look for files inside views
app.set('view engine', 'ejs')

// THIS IS THE MIDDILEWARE
// express.static: where to find file physically
// whenever I see '/assets', I check /public
// handle in the middle of the request and response
app.use('/assets', express.static(__dirname + '/public'))

// there is another param
// '/' means for any url, equal to the first arg ignored
// '/api' useful for url behind /api : such as .../api/useful
app.use('/', function(req, res, next) {
    console.log("run my middleware: " + req.url)
    // run another middleware
    next()
})
// seems run in up down sequence
app.use('/', function(req, res, next) {
    console.log("run another middleware: " + req.url)
    // run another middleware
    // which turns out to be the app.get method
    next()
})

// can think of app.get as kind of middleware
app.get('/', function(req, res) {
    // when facing render(), express will looking for views (because view engine is set up)
    res.render('index')
})

app.get('/:id', function(req, res) {
    res.render('showid', { id: req.params.id })
})

// check if the env var exists
var port = process.env.PORT || 3000

app.listen(port)
