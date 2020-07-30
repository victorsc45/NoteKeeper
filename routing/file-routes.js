const path = require('path');
const fs = require('fs');

const dbDir = path.join(__dirname + '/../db/db.json');

module.exports = function (app) {
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/notes.html'));
    });
    app.get('api/notes', function (req, res) {
        res.sendFile(dbDir);
    });
    app.get('api/notes/:id', function (req, res) {
        let noteId = req.params.id;
        console.log('note ids', noteId);
        for (var i = 0; i < id.length; i++) {
            if (noteId === id[i]) {
                return res.json(id[i]);
            }
        }

        return res.json(false);
    });
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });
    app.post('api/notes', function (req, res) {
        let notated = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
        let addedNote = req.body;
        notated.push(addedNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(notated));
        res.json(notated);
    });
    app.delete('api/notes/:id', function (req, res) {

        let notated = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));


        let noteId = req.params.id;

        notated.id.forEach((notated, index) => {
            if (notataed.id === noteId) {
                notated.id.splice(index, 1);
            }
        });
        fs.writeFileSync("./db/db.json", JSON.stringify(notated));
    })


}