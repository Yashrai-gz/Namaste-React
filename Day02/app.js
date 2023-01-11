//DAY 02

/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING : Created a seperate distfolder
 * MINIFY : there are minified index.js files and other files on production build not on dev build
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development : parcel-cache
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * package manager takes care of Transitive Dependencies(one dependecy depend on someother dependency)
 */

 import React from 'react';
 import ReactDOM from 'react-dom/client';
 
 //created root using createRoot
 const root1=document.getElementById("rt");
 const root=ReactDOM.createRoot(root1);
 
 /*
 React.createElement(type,{props},children); 
 type: the type of the HTML element (h1,p,button).
 props: properties of the object({style:{size:10px}} or Eventhandlers, classNames,etc).
 children: anything that need to be displayed on the screen
 */
 
 const One= React.createElement(
     "h1",
     {
         style:{color:"orange"},
         className:"first", //in react we have className instead of class
     },
 "This is Day 02 of Learning React.js");
 
 const heading = React.createElement(
     "h1",
     {
       id: "title",
     },
     "heading"
   );
   const heading1 = React.createElement(
     "h1",
     {
       id: "title",
     },
     "heading1"
   );
   
   const container = React.createElement(
     "div",
     {
       id: "container",
     },
     [One,heading, heading1] //children
   );
 
 // The ReactDOM.render() function takes two arguments, HTML code and an HTML element.
 // Purpose of render():
 // React renders HTML to the web page by using a function called render().
 // The purpose of the function is to display the specified HTML code inside the specified HTML element.
 // In the render() method, we can read props and state and return our JSX code to the root component of our app.
 // In the render() method, we cannot change the state, and we cannot cause side effects( such as making an HTTP request to the webserver).
 
 //  ReactDOM.render(container,root); //this is depricated in react 18
  root.render(container);