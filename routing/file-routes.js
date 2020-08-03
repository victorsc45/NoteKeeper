const path = require('path');
const fs = require('fs');
// output directory and final html team view with cards from templates directory


// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");
const dbDir = require('/../db/db.json');

module.exports = function (app) {
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname + './public/notes.html'));
    });


    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname + './public/index.html'));
    });
}