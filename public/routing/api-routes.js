const noteDB = require('../db/db.json');

module.exports = function (app) {
    app.get('/api/notes', function (req, res) {
        res.json(noteDB);
    });
    app.post('/api/notes', function (req, res) {
        let i;
        for (i = 0; i < noteDB.length; i++) {
            noteDB[{ id }] = id++;
            noteDB[i].push(req.body);
            res.json(true);
        }
    });

    app.delete('/api/notes/:id', (req, res) =>
        noteDB.findOneAndRemove({
            _id: req.params.id
        }, (err, notes) => {
            if (err) {
                res.send('error removing')
            } else {
                console.log(notes);
                res.json(noteDB);
            }
        }));
}