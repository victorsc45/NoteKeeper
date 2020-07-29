
// const noteDB = require('../public/assets/js/index.js');

//module.exports = function (app) {
    // app.get('/api/notes', function (req, res) {
    //     res.json(noteDB);
    // });
    // app.post('/api/notes', function (req, res) {
    //     let i;
    //     for (i = 0; i < noteDB.length; i++) {
    //         noteDB[{ id }] = id++;
    //         noteDB[i].push(req.body);
    //         res.json(noteDB);
    //     }
    // });
    // app.get('/api/notes', function (req, res) {
    //     const user_id = req.param('id');
    //     const title = req.param('title');
    //     const text = req.param('text');

    //     res.send(user_id + '' + title + '' + text);
    // });


    // post to users with parameters sent with following
//     app.post('/api/notes', function (req, res) {
//         const user_id = req.body.id;
//         const title = req.body.title;
//         const text = req.body.text;
//         res.send(user_id + ' ' + title + ' ' + text);
//     });

//     app.delete('/api/notes/:id', (req, res) =>
//         noteDB.findOneAndRemove({
//             _id: req.params.id
//         }, (err, notes) => {
//             if (err) {
//                 res.send('error removing')
//             } else {
//                 console.log(notes);
//                 res.json(noteDB);
//             }
//         }));
// }






