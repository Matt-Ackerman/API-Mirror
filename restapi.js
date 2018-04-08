
var CronJob = require('cron').CronJob;
var fs = require('fs');
var express = require('express');
var request = require('request');
var app = express();

var news;

// Cron job that runs twice a day. At 7:00AM and 7:00PM
//new CronJob('0,59 * * * *', function() {

	// Get the date since last time we gathered articles
  	var dateSinceLastGather = new Date();
  	dateSinceLastGather.setHours(dateSinceLastGather.getHours() - 12)

  	// Variable to include in our query to specify we only want posts since this time
	var millisecondsOfLastGather = dateSinceLastGather.getTime()

	// Reads in the Webhose api using the specified date
	request('http://webhose.io/filterWebContent?token=42e28899-ec4a-4758-bf49-735c1eb6b793&format=json&ts='
		+ millisecondsOfLastGather + '&sort=crawled&q=language%3Aenglish%20thread.country%3AUS%20social.facebook.likes%3A%3E100',
			function (error, response, body) {
		news = body;
	})

//}, null, true, 'America/Los_Angeles');

// Writes out to my own api
app.get('/api', function (req, res) {
	res.end(news);
})

// Sets address and port for my own api
var server = app.listen(8999, "0.0.0.0", function () {
	var host = server.address().address
   	var port = server.address().port
   	console.log("Example app listening at http://%s:%s", host, port)
})	








