import logo from "../../BhukLagii.png";

const Title=()=>( 
    <div className="left">
        <img src={logo} className="logo"/>
        </div>
);

 const Header=()=>{return (
    <div className="header"> 
    <Title/>
 <div className="nav_links">
 <ul >
    <li><a>Home</a></li>
    <li><a>About Us</a></li>
    <li><a>Contact Us</a></li>
    </ul>
    </div> 

    </div>


)};

 export default Header;