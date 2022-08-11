//Require dependencies
const express = require('express');

const notesRoutes = require('routes/routes.js')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

//Require routes
app.use('/api', notesRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});