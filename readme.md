## Stormpath's API Implementation

The main goal for this exercise is to show how easily Stormpath’s API can be implemented. In order to accomplish this goal, I used JavaScript framework, Express (NodeJS).

### STEPS

##### 1) Node Modules 
Node modules were ignored from this repository, so in order to fully implement this exercise, the following packages need to be installed under node modules using NPM in the Terminal.
 

 * npm init
 * npm install -s :
 
 	* express, jquery, ejs, bootstrap, normalize
 
 	
##### 2) Be sure type "server.js" when prompted for an "entry point: (index.js)" after running ``` npm install -s express ```, instead of the default "index.js".

##### 3) npm install express-stormpath   ```(important!) ```

##### 4) Serve static files.
Serve static files located inside:

* The "public" folder ( style sheets, javascripts, partials).
* The "node_modules" directory.
       
Use the express.static built-in middleware function in Express.

###### EX:

```javascript
app.use(express.static('public'));
});
```
 

##### 5) Be sure to require all necessary dependencies inside the “HEAD" of "index.ejs" file.
 	

##### 6) Stormpath API Implementation
 Please refer to Stormpath's [documentation](http://docs.stormpath.com/nodejs/express/latest/) for more details and information on the following steps:
* [introduction](http://docs.stormpath.com/nodejs/express/latest/introduction.html)
* [Setup](http://docs.stormpath.com/nodejs/express/latest/introduction.html)

#### [Configuration](http://docs.stormpath.com/nodejs/express/latest/configuration.html)
* I tested two ways to configure Stormpath's API into my application. Only one method between environment variables and downloading API Key ID & API Key Secret is necessary. I tested both in this exercise 

	##### Environment Variables
	*  Inside ".bash_profile"
	``` BASH 
    export STORMPATH_CLIENT_APIKEY_ID=YOUR_ID_HERE
	export STORMPATH_CLIENT_APIKEY_SECRET=YOUR_SECRET_HERE
	export STORMPATH_APPLICATION_HREF=YOUR_APP_HREF 
    ``` 
   	 *	 In Server.js
   
   ```JavaScript
   	app.use(stormpath.init(app, {
            apiKey: {
            id: process.env.STORMPATH_CLIENT_APIKEY_ID,
            secret: process.env.STORMPATH_CLIENT_APIKEY_SECRET
            },
            application: {
            href: process.env.STORMPATH_APPLICATION_HREF
            }
       }));
   ```
   
	##### Download API Key ID & API Key Secret
	
	* All requests to Stormpath must be authenticated with an API 			Key.

	* If you haven’t already, Sign up for Stormpath here. You’ll be 		  sent a verification email.

	* Click the link in the verification email.

	* Log in to the Stormpath Admin Console using the email address 			and password you used to register with Stormpath.

	* Click the Create API Key or Manage Existing Keys button in 			the middle of the page.

	* Under Security Credentials, click Create API Key.

	* This will generate your API Key and download it to your 	 			computer as an apiKey.properties file. If you open the file 			in a text editor, you will see something similar to the 			following:

```bash
apiKey.id = 144JVZINOF5EBNCMG9EXAMPLE
apiKey.secret = lWxOiKqKPNwJmSldbiSkEbkNjgh2uRSNAb+AEXAMPLE
```
Save this file in a secure location, such as your home directory, in a hidden /.stormpath directory. For example:

```bash
$ mkdir ~/.stormpath
$ mv ~/Downloads/apiKey.properties ~/.stormpath/
```
#### [Authentication](http://docs.stormpath.com/nodejs/express/latest/authentication.html)

```javascript

app.all(['/','/show'], stormpath.loginRequired, 	
  		stormpath.getUser, function (req, res){
        
 var data = req.user.givenName;
  
 var user = data.slice(0,1).toUpperCase() +  			   
  			data.slice(1).toLowerCase();
            
      if(req.user){

            res.render('show', {userInfo: user});
      }
      else{

            res.direct('login');
      }

});

```


#### [Authorization](http://docs.stormpath.com/nodejs/express/latest/authorization.html)

```javascript

app.all('/admins', stormpath.groupsRequired(['Admins']), 		
	    stormpath.getUser, function (req, res){
        
 	var data = req.user.givenName;
  
    var FirstName = data.slice(0,1).toUpperCase() + 
    				data.slice(1).toLowerCase(); 

     res.send(`${FirstName}, you are an Admin!!!`);
  });

```
#### [Registration](http://docs.stormpath.com/nodejs/express/latest/registration.html)

```javascript
{
  web: {
    register: {
      enabled: true,
      uri: '/signup',  // Use a different URL
      nextUri: '/',    // Where to send the user to, if auto login is enabled
      form: {
        fields: {
          /* see next section for documentation */
        },
        fieldOrder: [ /* see next section */ ]
      }
    }
  }
}
```
#### [Login](http://docs.stormpath.com/nodejs/express/latest/login.html) &  [Logout](http://docs.stormpath.com/nodejs/express/latest/logout.html)

```javascript

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
	

```
#### [Social Login](http://docs.stormpath.com/nodejs/express/latest/social_login.html)

Implementing social logins such as Google or Facebook is extremely easy with Stormpath [Documentation](http://docs.stormpath.com/nodejs/express/latest/index.html). I was able to implement login with [Facebook](http://docs.stormpath.com/nodejs/express/latest/social_login.html) using Stormpath's step by step guide. 


#### Thoughts 

* I enjoyed building this exercise, as it allowed to experience how easy it is to implement Stormpath's API and User Management Model.

* With more time, I would have tested other features of Stormpath's API, such as Password Resets, CustomData, Templates.

