const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'reinhardcv/build')));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    if (req.headers["x-forwarded-proto"] === "https"){
        res.sendFile(path.join(__dirname+'/reinhardcv/build/index.html'));
    }
    res.redirect("https://" + req.headers.host + req.url); 
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);