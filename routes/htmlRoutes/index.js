const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, './public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, './public/notes.html'));
});

module.exports = router;