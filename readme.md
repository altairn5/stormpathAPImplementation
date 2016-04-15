## Stormpath API Implementation

The main goal of this exercise is to show how easly Stormpath API can be implemented. In order to accomplish this goal, I used JavaScript framework, Express (NodeJS).
The following steps specify the required dependencies, so this exercise can be fully tested.

### STEPS

##### 1) Node Modules 
Node modules were ignored from this repository, so In order to fully implement this exercise, the following packages need to be installed under node modules using NPM from the Terminal.
 

 * npm init
 * npm install -s :
 
 	* express, jquery, ejs, bootstrap, normalize
 * #####  npm install express-stormpath   ```(important!) ```
 	
##### 2) Be sure type "server.js" when prompted for an "entry point: (index.js)" after running ``` npm install -s express ```, instead of the default "index.js".

##### 3) Serve static files.
Serve static files located inside:

* The "public" folder ( style sheets, javascripts, partials).
* The "node_modules" directory.
       
Use the express.static built-in middleware function in Express.

###### EX:

```javascript
app.use(express.static('public'));
});
```
 

##### 4) Be sure to require all necessary dependencies inside the “HEAD" of "index.ejs" file.
 	

#### 5) Stormpath API Implementation

#### Please refer to Stormpath documentation for more details and information on the required steps:
* introduction 
* Setup

#### Configuration
* I tested two  ways to configure Stormpath API into my application
	* ####  Environment Variables
	* * Inside ".bash_profile"
	``` BASH 
    export STORMPATH_CLIENT_APIKEY_ID=YOUR_ID_HERE
	export STORMPATH_CLIENT_APIKEY_SECRET=YOUR_SECRET_HERE
	export STORMPATH_APPLICATION_HREF=YOUR_APP_HREF 
    ``` 
   	 *	* Server.js
   
   ```javascript
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
	* #### Download API Key ID & API Key Secret
	
		* All requests to Stormpath must be authenticated with an API Key.

* If you haven’t already, Sign up for Stormpath here. You’ll be sent a verification email.

* Click the link in the verification email.

* Log in to the Stormpath Admin Console using the email address and password you used to register with Stormpath.

* Click the Create API Key or Manage Existing Keys button in the middle of the page.

* Under Security Credentials, click Create API Key.

* This will generate your API Key and download it to your computer as an apiKey.properties file. If you open the file in a text editor, you will see something similar to the following:

```bash
apiKey.id = 144JVZINOF5EBNCMG9EXAMPLE
apiKey.secret = lWxOiKqKPNwJmSldbiSkEbkNjgh2uRSNAb+AEXAMPLE
```
Save this file in a secure location, such as your home directory, in a hidden /.stormpath directory. For example:

```bash
 $ mkdir ~/.stormpath
 $ mv ~/Downloads/apiKey.properties ~/.stormpath/
```
#### Authentication
#### Authorization
#### Registration
#### Login
#### Social Login
#### Logout

#### Conclusion 
* Data was hardcoded to facilitate the implementation of responsive HTML, CSS, JavaScript practices.

* Even though a backend JavaScript framework was not required for this exercise, I chose Express because of its flexibility and scalability.

* Functionality was prioritized over design and styling for this exercise.

* I enjoyed building this exercise, as it allowed to visualize what might be necessary to build modern consumer financial applications. I would be very interested in continue learning about those processes. 
