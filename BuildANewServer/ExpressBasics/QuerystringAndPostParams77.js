/**
 * Created by ZhanpengDiao on 26/6/17.
 */
var express = require("express")
var bodyParser = require('body-parser')

// this returns a function include many params: node_modules/express/lib/express.js
var app = express()
var urlencodedParser = bodyParser.urlencoded({extended: false})

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
app.get('/', function(req, res, next) {console.log("this works"); next()}, function(req, res) {
    // when facing render(), express will looking for views (because view engine is set up)
    res.render('index')
})

// query string: ....?[QueryStr]
app.get('/:id', function(req, res) {
    res.render('querystring', { id: req.params.id, qstr: req.query.qstr })
})

// post method can add middleware at the 2nd params
// urlencodedParser create req.body props for me
// test: can also add in get
app.post('/', urlencodedParser, function(req, res) {
    res.send('thanks!')
    console.log(req.body.firstname)
    console.log(req.body.lastname)
})

// check if the env var exists
var port = process.env.PORT || 3000

app.listen(port)
