const express = require('express');
const Sequelize = require('sequelize');

const app = express();

app.set('views-engine','ejs');
app.set('views','views');

app.get('/ping', (req, res) => {
    res.send('pong');
})

app.listen(3000, () => {
    console.log('Server listening...');
})