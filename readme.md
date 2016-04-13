# Wireframes Assessment

The main goal of this exercise is to demonstrate optimal use of JavaScript, CSS, and HTML. In order to accomplish this goal, I used JavaScript framework, Express (NodeJS).
The following steps specify the required dependencies, so this exercise can be fully tested.

### STEPS

##### 1) Node Modules 
Node modules were ignored from this repository, so In order to fully implement this exercise, the following packages need to be installed under node modules using NPM from the Terminal.
 

 * npm init
 * npm install -s :
 
 	* express, jquery, ejs, bootstrap, and normalize
 	
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
 	

#### Testing

Responsive layout testing was conducted with Google's Developer Console for the following screen sizes:

* Apple iPhone 4 (320 X 480)
* Apple iPhone 6 plus (414 X 736)
* Apple iPad (768 X 1024)
* Md. Sz. Laptop (1280 X 800)
* Lg. Sz. Laptop (1440 X 900)


#### Comments

* Data was hardcoded to facilitate the implementation of responsive HTML, CSS, JavaScript practices.

* Even though a backend JavaScript framework was not required for this exercise, I chose Express because of its flexibility and scalability.

* Functionality was prioritized over design and styling for this exercise.

* I enjoyed building this exercise, as it allowed to visualize what might be necessary to build modern consumer financial applications. I would be very interested in continue learning about those processes. 
