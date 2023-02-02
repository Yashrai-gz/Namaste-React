import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"; //Header.js and Header both are valid
import Footer from "./components/Footer";
import Body from "./components/Body";

const root= ReactDOM.createRoot(document.getElementById("rt"));


const AppLayout=()=>{
    return(
        <>        
        <Header/>      
        <Body/>
        <Footer/>

        </>
    )
}




root.render(AppLayout());