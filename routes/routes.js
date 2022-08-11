const router = require('express').Router();
const { notes } = require('db\db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not filled in correctly.');
    } else {
        const note = createNewNote(req.body, notes);
    }
});

module.exports = router;