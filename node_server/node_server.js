var express = require('express');
var cors = require('cors');
var app = express();
var request = require("request");

app.use(cors());

app.get('/getXML/', function (req, res) {
	request({
	  uri: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q=' + [req.query.url],
	  method: "GET"
	}, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log("good");
			res.json(body); // Show the HTML for the Google homepage.
		}else{
			console.log("error");
			response.status(500);
			response.render('error', {error:err});
		}
	});
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});