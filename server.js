const express = require('express');
const Sequelize = require('sequelize');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

// Test route to ensure express is configured properly
/* 
app.get('/ping', (req, res) => {
    res.send('pong');
}) 
*/

// Initial route to login page
app.get('/', (req, res) => {
    res.render('login', {
        name: 'Hello World!'
    })
})

app.listen(3000, () => {
    console.log('Server listening...');
})