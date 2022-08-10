//Require dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const { notes } = require('./db/db');
app.get('/api/db', (req, res) => {
    res.send('Hello!');
  });



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(_dirname));

//Require routes
require('routes/notesRoutes')(app);

app.listen(3001, () => {
    console.log('API server now on port 3001!');
});