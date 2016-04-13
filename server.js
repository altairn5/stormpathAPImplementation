/*
* server.js
*/

// require express and other modules
var express = require('express'),
bodyParser = require('body-parser'),
cookieParser = require("cookie-parser"),
stormpath = require('express-stormpath'),
// session = require('express-session'),
// path = require('path'),
// bcrypt = require('bcrypt'),
// keygen = require('keygenerator'),
// methodOverride = require('method-override'),
// http = require('http'),
app = express();
  

// serve static files from public folder
app.use('/static',express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));
app.use(stormpath.init(app,{
	website: true
	}));

// app.use(stormpath.init(app, {
//   apiKey: {
//     id: process.env.STORMPATH_CLIENT_APIKEY_ID,
//     secret: process.env.STORMPATH_CLIENT_APIKEY_SECRET
//   },
//   application: {
//     href: process.env.STORMPATH_APPLICATION_HREF
//   }
// }));

// set view engine to ejs
app.set('view engine', 'ejs');

//Home view
app.all('/', function (req, res) {
  res.render('index');
});

app.get('/show', function (req, res){
 
  res.render('show');

})

// listen on port 3000
app.on('stormpath.ready', function() {
  app.listen(3000);
});