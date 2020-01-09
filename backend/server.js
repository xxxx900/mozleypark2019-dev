const express = require('express');
var path = require('path');
var ddb = require('dynamodb')

ddb.AWS.config.update();

let AWS = require('aws-sdk');
AWS.config.update();
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
let router = express.Router();

//Starting Express app
const app = express();

// Server Distribution
// //Set the base path to the project-mozley dist folder
// app.use(express.static(path.join(__dirname, 'dist/project-mozley')));
// //Any routes will be redirected to the angular app
// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'dist/project-mozley/index.html'));
// });

// Local test distribution

//Starting server on port 8081
app.listen(8081, () => {
    console.log('Server started!');
    console.log('on port 8081');
    dynamodb.listTables({}, function(err, res) {console.log(res);});
});
