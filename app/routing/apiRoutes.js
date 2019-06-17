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

    app.get('/api/getMatch', (req, res, next) =>{
        if (friends.length===0){
            console.log('No past users. You are your own best friend');
            return;
        }
        var user = req.query;
        var currentScore = 999;
        var currentMatch = "";
        for (var i = 0; i < friends.length; i++){
            var matchUser = friends[i];
            var totalScore = 0;
            for (scoreCount = 0; scoreCount < matchUser["scores[]"].length; scoreCount++){
                var matchScore = parseInt(matchUser["scores[]"][scoreCount]);
                var userScore = parseInt(user.scores[scoreCount]);
                totalScore += Math.abs(matchScore-userScore);
                console.log(totalScore);
            }
            if (totalScore < currentScore){
                currentScore = totalScore;
                currentMatch = matchUser;
            }
        }
        res.send(currentMatch);
    });

    app.post('/api/friends', (req,res,next) =>{
        var newUser = req.body;
        console.log(friends);
        friends.push(newUser);
        fs.writeFileSync(path.join(__dirname, "../data/friends.js"), "module.exports = " + JSON.stringify(friends));
        });
};