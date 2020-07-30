// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// Routes
// =============================================================
require('./routing/html-routes.js')(app);
require('./routing/api-routes.js')(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});