var sslRedirect = require("heroku-ssl-redirect");
const express = require('express');
const path = require('path');
const e = require('express');

const app = express();
app.use(sslRedirect());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'reinhardcv/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname+'/reinhardcv/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);