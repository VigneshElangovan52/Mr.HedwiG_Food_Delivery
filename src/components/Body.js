import RestaurantCard from "./RestaurantCard";
// import restaurantList from "./RestaurantList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantData, setrestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState ([]);
  //console.log(restaurantList, "mockData");
  // console.log(restaurant, "vignesh123");
  // const [searchClicked,setSearchClicked]=useState('True');

  const userStatus = useOnlineStatus();

  useEffect(() => {
    fetchCall();
  },[]);

  const fetchCall = async () =>{
    // const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.034672&lng=77.039611&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const response = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.034672&lng=77.039611&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //console.log(response, 'MapIT1');
    const json = await response.json();
    //console.log(json, 'MapIT2');
    const final = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setrestaurantData(final);
    setFilteredRestaurants(final);
    // const dataToMap = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // console.log(dataToMap, 'apiresponse');
    //setrestaurantData(final.restaurants);
    console.log(final, 'MapIT');

  }

  const filterResults = (searchtext, restaurantList) => {
    const results = restaurantList.filter((item) =>
      item.info.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    return results;
  };
  
  const filterByRating = (restautrantList) => {
    const ratedrestaurants = restautrantList.filter(
      (item) => item.info.avgRating > "4.0"
    );
    return ratedrestaurants;
  };

  if (userStatus === false) return <h1>Oops, seems like you're disconneted! Please check internet connectivity</h1>;
  
  if(filteredRestaurants.length === 0) return <Shimmer />;

  // const {id} = filteredRestaurants?.info;

  return (
    <div className="parent-div my-2">
      <input
        type="search"
        placeholder=" Search for a restaurant "
        className="mx-4 my-2 border border-solid border-black"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          //console.log(searchText, "vignesh");
        }}
      />
      <button
        className="bg-green-300 border hover:bg-gray-300 border-solid border-black rounded-md px-2"
        onClick={() => {
          const result = filterResults(searchText, restaurantData);
          setFilteredRestaurants(result);
        }}
      >
        Search
      </button>{" "}
      &nbsp;
      <button className="bg-stone-400 hover:bg-slate-300 border border-solid border-black rounded-md px-2"
        onClick={() => {
          const ratedrestaurants = filterByRating(restaurantData);
          setFilteredRestaurants(ratedrestaurants);
        }}
      >
        Restaurants above 4.0 rating
      </button>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((item) => {
          return <Link key = {item.info.id} to={"/restaurant/"+item.info.id}><RestaurantCard {...item.info} /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;

// {/* EXAMPLE FOR RE-CONCILIATION
//      <h1>{searchClicked}</h1>
// <button onClick={()=>{
//   if (searchClicked==='True')
//   {
//   setSearchClicked('False');
// }
//   else
//   setSearchClicked('True');
// }
// }>Search</button> */}
