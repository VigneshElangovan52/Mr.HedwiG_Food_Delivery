import RestaurantCard from "./RestaurantCard";
// import restaurantList from "./RestaurantList";
import { useState, useEffect } from "react";



const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantData, setrestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState ([]);
  //console.log(restaurantList, "mockData");
  // console.log(restaurant, "vignesh123");
  // const [searchClicked,setSearchClicked]=useState('True');

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
    //console.log(final, 'MapIT');

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

  return (
    <div className="parent-div">
      <input
        type="search"
        placeholder="Search for a restaurant"
        className="search-bar"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          //console.log(searchText, "vignesh");
        }}
      />
      <button
        onClick={() => {
          const result = filterResults(searchText, restaurantData);
          setFilteredRestaurants(result);
        }}
      >
        Search
      </button>{" "}
      &nbsp;
      <button
        onClick={() => {
          const ratedrestaurants = filterByRating(restaurantData);
          setFilteredRestaurants(ratedrestaurants);
        }}
      >
        Restaurants above 4.0 rating
      </button>
      <div className="restaurant-list">
        {filteredRestaurants.map((item) => {
          return <RestaurantCard {...item.info} />;
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
