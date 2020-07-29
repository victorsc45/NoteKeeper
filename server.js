// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// Routes
// =============================================================
require('./public/routing/api-routes.js')(app);
require('./public/routing/html-routes.js')(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});