// Dependencies
// =============================================================
const express = require('express');
const path = require('path');

const fs = require('fs');
// Sets up the Express App
// =============================================================
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dbDir = require('./db/db.json');


// Routes API
// =============================================================
app.get('api/notes', function (req, res) {

    res.sendFile(path.join(__dirname, "./db/db.json"));
});


app.post('api/notes', function (req, res) {

    let addedNote = req.body;
    if (dbDir.length === 0) {
        addedNote.id = 1;
    } else {
        const newID = dbDir[dbDir.length - 1].id + 1;
        addedNote.id = newID;
    }
    dbDir.push(addedNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(dbDir));
    res.json(dbDir);


});
app.delete('api/notes/:id', function (req, res) {

    let notated = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));


    let noteId = parseInt(req.params.id);

    notated.forEach((notated, index) => {
        if (notated.id === noteId) {
            notated.id.splice(index, 1);
        }
    });
    dbDir = notated;
    fs.writeFileSync('./db/db.json', JSON.stringify(dbDir));
    res.json(dbDir);
});


// File routes
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});