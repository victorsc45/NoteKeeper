// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 5500;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



// Routes
// =============================================================
app.get('/notes', function (req, res) {
    const user_id = req.body('id');
    const title = req.body('title');
    const text = req.body('text');

    res.send(user_id + '' + title + '' + text);
});


// post to users with parameters sent with following
app.post('api/notes', function (req, res) {
    const user_id = req.body.id;
    const title = req.body.title;
    const text = req.body.text;
    res.send(user_id + ' ' + title + ' ' + text);
});

app.delete('api/notes/:id', (req, res) =>
    noteDB.findOneAndRemove({
        _id: req.body.id
    }, (err, notes) => {
        if (err) {
            res.send('error removing')
        } else {
            console.log(notes);
            res.send(user_id + ' ' + title + ' ' + text);
        }
    }));

// Routes
// =============================================================
//require('./public/routing/api-routes.js')(app);
require('./public/routing/html-routes.js')(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});