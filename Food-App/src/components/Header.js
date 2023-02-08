import logo from "../../BhukLagii.png";
import { useState } from "react";

const loggedInUser =()=>{
    //API call to check aunthetication
    return false;
};

const Title=()=>( 
    <div className="left">
        <img src={logo} className="logo"/>
        </div>
);

 const Header=()=>{
    const[isLoggedIn, setIsLoggedIn]=useState(false);

    return (
    <div className="header"> 
    <Title/>
 <div className="nav_links">
 <ul >
    <li><a>Home</a></li>
    <li><a>About Us</a></li>
    <li><a>Contact Us</a></li>
    </ul>
    </div> 
    {
    isLoggedIn ? ( <button className="log" onClick={()=> setIsLoggedIn(false)}>LogOut</button>) : ( 
    <button className="log"  onClick={()=> setIsLoggedIn(true)}>LogIn</button>
    )
    }
    
    </div>


)};

 export default Header;