const path = require('path');
const fs = require('fs');
// output directory and final html team view with cards from templates directory


const dbDir = require('/../db/db.json');

module.exports = function (app) {

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

        fs.writeFileSync("./db/db.json", JSON.stringify(dbDir));
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
        fs.writeFileSync("./db/db.json", JSON.stringify(notated));
        res.json(notated);
    });


}