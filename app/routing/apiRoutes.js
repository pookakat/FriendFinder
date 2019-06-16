var express = require('express');
var path = require('path');

var bodyParser = require("body-parser");


module.exports = function(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.get('/api/friends', (req, res, next) => {

    })

    app.post('/api/friends', (req,res,next) =>{
        var newUser = req.body;
        console.log(newUser);
    })
}