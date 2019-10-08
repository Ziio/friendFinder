var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var userInp = req.body;
        var userRes = userInp.scores;

        var matchName = " ";
        var matchImg = " ";
        var totalDiff = 10000;

        for (var i = 0; i< friends.length; i++) {
            var diff = 0;
            for (var j = 0; j < userRes.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userRes[j]);
            }

            if (diff < totalDiff) {
                totalDiff = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
            }
        
friends.push(userInp);
res.json({status: "ok", matchName: matchName, matchImg: matchImg})
    });
};