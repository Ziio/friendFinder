var express = require("express");
var bodyParser = require("body-parser");
var http = require("http");
var path = require("path");

var app = express();
var PORT = 3300;

app.use(express.static(path.join(__dirname, './app/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());

require(path.join(__dirname, './app/routes/apiRoutes'))(app);
require(path.join(__dirname, './app/routes/htmlRoutes'))(app);

app.listen(PORT, function() {
    console.log("Server listening on http://localhost:" + PORT);
});