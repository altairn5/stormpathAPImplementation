/*
* server.js
*/

// require express and other modules
var express = require('express'),
bodyParser = require('body-parser'),
cookieParser = require("cookie-parser"),
stormpath = require('express-stormpath'),
app = express();
  

// serve static files from public folder
app.use('/static',express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));
app.use(stormpath.init(app,{
	website: true,
	web:{
		login: {
			enabled: true,
			nextUri: "/show"
				},
		logout: {
		    enabled: true,
		    nextUri: '/login'
				 }
		}
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
// app.all('/', function (req, res) {
//   var client = req.app.get('stormpathClient');
//   console.log("are you hitting the root?");
//   res.render('index');
// });

app.all(['/','/show'], stormpath.loginRequired, stormpath.getUser, function (req, res){
	var data = req.user.givenName;
	// console.log(`this is the data = ${data}`);
	var user = data.slice(0,1).toUpperCase() + data.slice(1).toLowerCase();
	// console.log(`this is the user = ${user}`);
	
 	if(req.user){
  		res.render('show', {userInfo: user});
 	}
 	else{
 		res.direct('login');
 	}

})

// listen on port 3000
app.on('stormpath.ready', function() {
  app.listen(3000);
});