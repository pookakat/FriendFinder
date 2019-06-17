var express = require('express');
var path = require('path');
var friends = require('../data/friends.js');
var fs = require('fs');

var bodyParser = require("body-parser");


module.exports = function(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.get('/api/friends', (req, res, next) => {
        res.send(friends);
    });

    app.post('/api/friends', (req,res,next) =>{
        var newUser = req.body;
        console.log(friends);
        friends.push(newUser);
        fs.writeFileSync(path.join(__dirname, "../data/friends.js"), "module.exports = " + JSON.stringify(friends));
        console.log('I think I am done');
        });
};