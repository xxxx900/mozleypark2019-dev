const express = require('express');
var path = require('path');

//Starting Express app
const app = express();

//Set the base path to the project-mozley dist folder
app.use(express.static(path.join(__dirname, 'dist/project-mozley')));

//Any routes will be redirected to the angular app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/project-mozley/index.html'));
});

//Starting server on port 8081
app.listen(8081, () => {
    console.log('Server started!');
    console.log('on port 8081');
});