var express = require('express');
var path = require('path');
module.exports = function(app) {
    app.get('/home', (req, res, next) =>{
        res.sendFile('home.html', {root: path.join(__dirname, "../public")});
    })
    app.get('/survey', (req, res, next) =>{
        res.sendFile('survey.html', {root: path.join(__dirname, "../public")});
    })
    app.get('/', (req, res, next) =>{
        res.sendFile('home.html', {root: path.join(__dirname, "../public")});
    })
}