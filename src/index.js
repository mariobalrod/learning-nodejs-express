const express = require('express');
const server = express();

/*
    Para unir directorios path.join(),
    evita conflictos con directs de 
    linux "/" y windows "\"
*/
const path = require('path');

// Server Settings
server.set('port', 8080);
    //_dirname : nos da la ruta absoluta
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

// Routes
server.get('/', (req, res) => {
    res.render('index', {title: 'Home Page'});
});
server.get('/register', (req, res) => {
    res.render('index', {title: 'Register Page'});
});

// Listening the server
server.listen(server.get('port'), () => {
    console.log(`Server on port ${server.get('port')}`);
});

