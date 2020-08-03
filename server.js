// Dependencies
// =============================================================
const express = require('express');
const path = require('path');


// Sets up the Express App
// =============================================================
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const dbDir = require('./db/db.json');


// Routes API
// =============================================================
app.get('api/notes', function (req, res) {
    res.json(dbDir);
});


app.post('api/notes', function (req, res) {

    let addedNote = req.body;
    if (dbDir.length === 0) {
        addedNote.id = 1;
    } else {
        addedNote.id++;
    }
    dbDir.push(addedNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(dbDir));
    res.json(dbDir);


});
app.delete('api/notes/:id', function (req, res) {

    let notated = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));


    let noteId = parseInt(req.params.id);

    notated.id.forEach((notated, index) => {
        if (notataed.id === noteId) {
            notated.id.splice(index, 1);
        }
    });
    fs.writeFileSync('./db/db.json', JSON.stringify(notated));
    res.json(notated);
});


// File routes
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});