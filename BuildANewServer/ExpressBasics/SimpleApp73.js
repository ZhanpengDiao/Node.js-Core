var express = require("express")

// this returns a function include many params: node_modules/express/lib/express.js
var app = express()

// check if the env var exists
var port = process.env.PORT || 3000

// app.get()

app.listen(port)