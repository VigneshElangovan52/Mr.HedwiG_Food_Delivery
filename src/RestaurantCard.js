const RestaurantCard =({cloudinaryImageId,name,cuisines,costForTwoString,slaString })=>{
    // const { cloudinaryImageId,name,cuisines,costForTwoString,slaString } =restaurant.data; 
    // Line 2 is destructuring the props from "restaurant" object
    return(
        <div className="restaurant-card">
<img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
+ cloudinaryImageId} alt="Biriyani Bowl" />
<h3>{name}</h3>
<h6>Will be delivered in {slaString}</h6>
<h6>{cuisines.join(',' )}</h6>
<h6>Costs {costForTwoString}</h6>
        </div>
    )
}

export default RestaurantCard;