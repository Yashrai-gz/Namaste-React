import { IMG_CDN_URL } from "../config";

//we can also receive prps as paramter as  const RestrauntCard=(props)=>{ and use props.resturant to access the data }
//({resturant}) This is destructuring of object

export const RestrauntCard=({ restaurant })=>{   
    const {name, cuisines, lastMileTravelString, cloudinaryImageId}= restaurant.data;  
    return(
        <div className="card">
            <img src={IMG_CDN_URL+ cloudinaryImageId} alt="Image" />
            <h2>{name} </h2>
            <h3> {cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}