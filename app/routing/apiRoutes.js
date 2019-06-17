var express = require('express');
var path = require('path');
var friends = require('../data/friends.js');

var bodyParser = require("body-parser");


module.exports = function(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.get('/api/friends', (req, res, next) => {
        res.send(friends);
    });

    app.post('/api/friends', (req,res,next) =>{
        var newUser = req.body;
        module.exports = newUser;
        });
};