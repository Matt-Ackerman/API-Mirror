var request = require('request');
request('http://webhose.io/filterWebContent?token=42e28899-ec4a-4758-bf49-735c1eb6b793&format=json&ts=1523134316042&sort=crawled&q=language%3Aenglish%20domain_rank%3A%3E99000%20%22Donald%20Trump%22',
		function (error, response, body) {

    var fs = require('fs');
	var stream = fs.createWriteStream("/Users/Matt/Desktop/restapi/my_file.json");
	stream.once('open', function(fd) {
  	stream.write(body);
  	stream.end();
	});

})





var express = require('express');
var app = express();
var fs = require("fs");

app.get('/api', function (req, res) {
   fs.readFile( __dirname + "/Users/Matt/Desktop/restapi/my_file.json", 'utf8', function (err, data) {
     
       var jsonObject = require("/Users/Matt/Desktop/restapi/my_file.json");
       //console.log(jsonObject)
       res.end(JSON.stringify(jsonObject, null, 4));
   });
})

var server = app.listen(8999, "0.0.0.0", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})








