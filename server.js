//Require dependencies
const express = require('express');

const notesRoutes = require('./routes/apiRoutes/apiRoutes')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Require routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(3001, () => {
    console.log('API server now on port 3001!');
});