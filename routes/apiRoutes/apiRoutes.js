const router = require("express").Router();
//const notesRoutes = require('../Develop/routes');

const { notes } = require('Develop\public\assets\js\index.js')

router.get('/db', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.post('/db', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validate)
    res.status(400).send('')
})

module.exports = router;