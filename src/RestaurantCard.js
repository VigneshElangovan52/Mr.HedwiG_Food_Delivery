const RestaurantCard =({cloudinaryImageId,name,costForTwo,areaName,sla})=>{
    // const { cloudinaryImageId,name,cuisines,costForTwoString,slaString } =restaurant.data; 
    // Line 2 is destructuring the props from "restaurant" object
    return(
        <div className="restaurant-card">
<img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
+ cloudinaryImageId} alt="Biriyani Bowl" />
<h3>{name}</h3>
<h6>Located at {areaName}</h6>
<h6>Costs {costForTwo}</h6>
<h6>Will reach you in {sla.slaString}</h6>
</div>
    )
}

export default RestaurantCard;