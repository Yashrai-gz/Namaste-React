import React from 'react';
import ReactDOM from "react-dom/client";
import logo from "./user.png"; //this is how image should be imported
import "./index.css";

//create a header containing logo to left search bar at center and user links to the right


const root =ReactDOM.createRoot(document.getElementById("rt"));

// const mainDiv= React.createElement(
//     "div",
//     {className:"title",key:"01"},
//     [
//         React.createElement("h1", {key: "02"},"This is heading 1 "),
//         React.createElement("h2", {key: "03"},"This is heading 2 "),
//         React.createElement("h3", {key: "04"},"This is heading 3 ")
//     ]);

const Search =()=>{
    return <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
          <button type="submit">
            Submit
          </button>
        </div>      
    
}

//If you writing multiple lines of JSX you need to enclose it in () brackets

const Image =()=>{  //this is fuunctional component and its naming should always be in capital letters
return (
<div className="left">
    <img src={logo} alt="user login" className="logo" />
    </div>
    )
}


const Maindiv= ()=>{  
return (
<div className="header">
<Image/>    {/* example of component inside componnet*/}
<Search/>   
        <ul className= "nav_links">
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>contact Us</a></li>              
            
        </ul>      
    </div>
)
};
  

    root.render(Maindiv());  //instead of <Fun/> we can write Fun()
