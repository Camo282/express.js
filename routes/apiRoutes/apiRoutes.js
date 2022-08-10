const router = require("express").Router();
const notesRoutes = require('../Develop/routes');

router.use(notesRoutes);

module.exports = router;