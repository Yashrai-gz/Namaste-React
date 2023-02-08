import { restrauntList } from "../config";  //when file is at same level is its parent
import { RestrauntCard } from "./RestrauntCard";  //when file is at same level
import {useState, useEffect} from "react";
import {Shimmer} from "./Shimmer"; 

//filter function to check whether the given searchText is included in any of the restaurant names
function filterData(searchText,restaurants)
{
    return restaurants.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())); //converted to lowercase to include all the words written in lower and uppercase      
    
}

//logic for no restaurants 
const Demofun=({props})=>{
    if(!props) return <h1>Sorry No match</h1>;   //if filtered list is empty
    else{  
        props.map((res)=>{
            return (<RestrauntCard restaurant={res} key={res.data.id}/>);
    })
}};

const Body=()=>{
    const [searchText, setSearchText] = useState(""); //use to create loacal state variable
    const [allRestaurants, setAllRestaurants]=useState([]);  //this is the state variable to keep track of original list of all the restaurants 
    const [filteredRestaurants, setFilteredRestaurants]=useState([]); // we will filter out the restaurants from allRestaurants
    
        useEffect(()=>{
            //API call
            getRestaurants();
        },[]);

        async function getRestaurants(){
            const data= await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&page_type=DESKTOP_WEB_LISTING"
            );
            const json= await data.json();

            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); // Assigning values to the state variables at the intial render 
            setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        }

        //Avoid rendering (early return)
      if(!allRestaurants) return null; //when our page loads we have nothing in our allRestaurants      

        return allRestaurants?.length===0 ? (<Shimmer/>) : ( 
        <>         
        <div className="search-container">
            <input type="text" className="search-input" 
               value= {searchText} placeholder="Search"
               onChange={(e)=>{  // e is the varaible that reads what is written by user
                setSearchText(e.target.value) //this is use to update the value of searchText
                }} />

            <button className="search-btn" 
            onClick={()=>{
                //filter the data 
                const data=filterData(searchText,allRestaurants);

                //update the resturant
                setFilteredRestaurants(data);

                }}>Search</button>
                
        </div>
        <div className="restraunt-list">
        {
        filteredRestaurants.map((res)=>{ 
            return (<RestrauntCard restaurant={res} key={res.data.id}/>);
            } )}
           
             {/* <Demofun props={filteredRestaurants}/>  */ } {/** This logic for displaying no restaurant is not working   */} 
           
        </div>
        </>
        
    )
    }

    export default Body; 

           
             
             {/**Need help in logic for no restaurants- Chapter-06 */}
            
         {/** we can also use RestrauntCard(restrauntList[0]) because at the and functional component is just a normal JS function. */}