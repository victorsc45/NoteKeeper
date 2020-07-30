const path = require('path');

module.exports = function (app) {
    app.get('api/notes', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/notes.html'));
    });
    app.get('api/*', function (app) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    })
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));// check routing here!!!!
    });
}