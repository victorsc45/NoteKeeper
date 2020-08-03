// Dependencies
// =============================================================
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { json } = require('express')
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// Routes
// =============================================================
require('./routing/api-routes.js')(app);
require('./routing/file-routes.js')(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});