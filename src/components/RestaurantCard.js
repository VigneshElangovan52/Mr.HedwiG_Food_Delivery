const RestaurantCard =({cloudinaryImageId,name,costForTwo,areaName,sla})=>{
    // const { cloudinaryImageId,name,cuisines,costForTwoString,slaString } =restaurant.data; 
    // Line 2 is destructuring the props from "restaurant" object
    return(
        <div className="w-48 m-4 p-4 border bg-slate-400 border-solid rounded-lg hover:bg-slate-500">
<img className= "w-44 h-28 rounded-md border border-solid" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
+ cloudinaryImageId} alt="Biriyani Bowl" />
<h3 className="font-bold py-2 text-lg">{name}</h3>
<h6 className="pb-2">Located at {areaName}</h6>
<h6 className="pb-2">Costs {costForTwo}</h6>
<h6 className="pb-2">Will reach you in {sla.slaString}</h6>
</div>
    )
}

export default RestaurantCard;

//Higher Order Components take an component as parameter, and returns another component which is enhanced/manipulated

export const isPromoted = (RestaurantCard) =>{
    return ((props)=>{
        return(
        <div>
            <label className="absolute bg-black text-white rounded-md">Promoted</label>
            <RestaurantCard {...props}/>
        </div>
        )
    })
}