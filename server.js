  /*
  * server.js
  */
/* Require Express and Other Modules */
  var express = require('express'),
  bodyParser = require('body-parser'),
  cookieParser = require("cookie-parser"),
  stormpath = require('express-stormpath'),
  app = express();


  /* Serve Static Files from Public Folder */
  app.use('/static',express.static(__dirname + '/public'));
  app.use('/scripts', express.static(__dirname + '/node_modules'));


  /* Stormpath API Implementation */
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

  /* Alternative Implementation With Enviroment Variables */

            /*app.use(stormpath.init(app, {
            apiKey: {
            id: process.env.STORMPATH_CLIENT_APIKEY_ID,
            secret: process.env.STORMPATH_CLIENT_APIKEY_SECRET
            },
            application: {
            href: process.env.STORMPATH_APPLICATION_HREF
            }
          }));*/


/* set view engine to ejs */
  app.set('view engine', 'ejs');



/* Basic Route */


  app.all(['/','/show'], stormpath.loginRequired, stormpath.getUser, function (req, res){
  
      var data = req.user.givenName;
  
      var user = data.slice(0,1).toUpperCase() + data.slice(1).toLowerCase();
  
      if(req.user){

            res.render('show', {userInfo: user});
      }
      else{

            res.direct('login');
      }

});

  /* Special Level Access Routes*/

  /*Admins Route*/

  app.get('/admins', stormpath.groupsRequired(['Admins']), stormpath.getUser, function (req, res){

     var data = req.user.givenName;
  
     var FirstName = data.slice(0,1).toUpperCase() + data.slice(1).toLowerCase(); 

     res.send(`${FirstName}, you are an Admin`);
  });


  /* Read-Only Route*/
  app.get('/read', stormpath.groupsRequired(['ReadOnly', 'Testing', 'Admins']), stormpath.getUser, function (req, res){

     var data = req.user.givenName;
  
     var FirstName = data.slice(0,1).toUpperCase() + data.slice(1).toLowerCase(); 

     res.send(`${FirstName}, you are in a read-only endpoint`);
  });

  /*listen on port 3000*/

  // app.get('/test', stormpath.groupRequired)

  app.on('stormpath.ready', function() {

      app.listen(3000);

  });


