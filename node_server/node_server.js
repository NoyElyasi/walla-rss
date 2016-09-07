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
		//Parse body into json object
		var bodyJSON = JSON.parse(body);
		if (!error && bodyJSON.responseStatus == 200) {
			res.json(JSON.stringify(bodyJSON));
		}else{
			console.log("error");
			res.status(500);
		}
	});
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});