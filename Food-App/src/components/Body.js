import { restrauntList } from "../config";  //when file is at same level is its parent
import { RestrauntCard } from "./RestrauntCard";  //when file is at same level
import {useState} from "react";

//filter function to check whether the given searchText is included in any of the restaurant names
function filterData(searchText,restaurants)
{
    return restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText));      
    
}

const Body=()=>{
    const [searchText, setSearchText] = useState(""); //use to create loacal state variable
    const [restaurants, setRestaurants]=useState(restrauntList);
    return (
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
                const data=filterData(searchText,restaurants);

                //update the resturant
                setRestaurants(data);

                }}>Search</button>
                
        </div>
        <div className="restraunt-list">
            {
            restaurants.map((res)=>{
                return <RestrauntCard restaurant={res} key={res.data.id}/>
            })
             }
         {/** we can also use RestrauntCard(restrauntList[0]) because at the and functional component is just a normal JS function. */}
           
        </div>
        </>
        
    )
    }

    export default Body; 