var express = require('express');

var app = express();

app.get('/survey', (req, res, next) =>{
    res.send('/survey.html');
})