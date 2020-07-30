const path = require('path');

module.exports = function (app) {
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname + '/notes.html'));
    });
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));// check routing here!!!!
    });
}