
module.exports = function (app) {

    app.get('api/notes', function (req, res) {
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
}






