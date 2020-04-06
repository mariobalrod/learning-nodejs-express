const express = require('express');
/*
    Para unir directorios path.join(),
    evita conflictos con directs de 
    linux "/" y windows "\"
*/
const path = require('path');

const server = express();

// Server Settings
server.set('port', process.env.PORT || 3000);
    //_dirname : nos da la ruta absoluta
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
    //configuracion del motor de plantillas para usar .html en vez de .ejs
//server.engine('html', ejs.renderFile);

// Routes
server.use(require('./routes'));

// Static Files
server.use(express.static(path.join(__dirname, 'public')));

// Listening the server
server.listen(server.get('port'), () => {
    console.log(`Server on port ${server.get('port')}`);
});

