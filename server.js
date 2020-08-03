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

    res.sendFile(path.join(__dirname, './db/db.json'));
});

app.post('/api/notes', function (req, res) {
    let readNotes = JSON.parse(fs.readFileSync('./db/db.json', "utf8"));
    let notated = req.body;
    let newID = readNotes.length.toString();
    notated.id = newID;
    readNotes.push(notated);

    fs.writeFileSync('./db/db.json', JSON.stringify(readNotes));
    console.log("Note saved to db.json. Content: ", notated);
    res.json(readNotes);
});
app.delete("/api/notes/:id", (req, res) => {
    let noteID = parseInt(req.params.id);
    const selectedID = (item) => item.id === noteID;
    dbDir.splice(dbDir.findIndex(selectedID), 1);
    fs.writeFileSync("./db/db.json", JSON.stringify(dbDir));
    response.json(dbDir);
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