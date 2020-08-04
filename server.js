// Dependencies
// =============================================================
const express = require('express');
const path = require('path');
const fs = require('fs');

// Sets up the Express App
// =============================================================
const app = express();
// local and deployed operating ports
const PORT = process.env.PORT || 8080;
// express using statements
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// variable for the db connection to the json file
const dbDir = require('./db/db');

// File route for notes html page of the view
app.get("/", function (req, res) {
    res.json(path.join(__dirname, "public/index.html"));
});

app.get('/notes', (req, res) => {

    res.sendFile(path.join(__dirname, "./public/notes.html"));
})

// Routes API
// =============================================================
app.get('/api/notes', (req, res) => {
    res.json(dbDir);
});
// api to post new notes to db
app.post('/api/notes', (req, res) => {
    let readNotes = JSON.parse(fs.readFileSync('./db/db.json', "utf8"));
    let notated = req.body;
    let newID = readNotes.length.toString();
    notated.id = newID;
    readNotes.push(notated);

    fs.writeFileSync('./db/db.json', JSON.stringify(readNotes));
    console.log("Note saved to db.json. Content: ", notated);
    console.log('read all notes', dbDir);
    res.json(dbDir);
});
// api to delete the notes entered to db
app.delete("/api/notes/:id", (req, res) => {
    let noteID = parseInt(req.params.id);
    const selectedID = (item) => item.id === noteID;
    dbDir.splice((dbDir.findIndex(selectedID)), 1);
    fs.writeFileSync("./db/db.json", JSON.stringify(dbDir));
    res.json(dbDir);
});
// catch all for index.html view
app.get('*', (req, res) => {

    res.sendFile(path.join(__dirname, "./public/index.html"));
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});