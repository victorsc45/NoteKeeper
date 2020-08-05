// Dependencies
// =============================================================
const express = require('express');
const path = require('path');
const fs = require('fs');
//const uuid = require('uuid');
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
const dbDir = () => { return JSON.parse(fs.readFileSync('./db/db.json', "utf8")) };
//console.log('this is the db', dbDir);
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
    const getter = dbDir();
    res.json(getter);
});
// api to post new notes to db
app.post('/api/notes', (req, res) => {
    let readNotes = dbDir();
    let notated = req.body;
    let newID = readNotes.length.toString();
    notated.id = newID;
    readNotes.push(notated);

    fs.writeFileSync('./db/db.json', JSON.stringify(readNotes));
    console.log("Note saved to db.json. Content: ", notated);
    console.log('read all notes', readNotes);
    res.json(readNotes);
});
// api to delete the notes entered to db
app.delete("/api/notes/:id", (req, res) => {
    let deleter = dbDir();
    let noteID = parseInt(req.params.id);
    const selectedID = (item) => item.id === noteID;
    if (noteID > -1) {
        deleter.splice(selectedID, 1);
        console.log('deleter', deleter);
    }
    fs.writeFileSync("./db/db.json", JSON.stringify(deleter));
    res.json(deleter);
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