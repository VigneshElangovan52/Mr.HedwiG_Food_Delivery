import RestaurantCard from "./RestaurantCard";
import restaurantList from "./RestaurantList";
import { useState } from "react";

const filterResults = (searchtext, restaurantList) => {
  const results = restaurantList.filter((item) =>
    item.data.name.includes(searchtext)
  );
  return results;
};

const filterByRating = (restautrantList) => {
  const ratedrestaurants = restautrantList.filter(
    (item) => item.data.avgRating > "4.0"
  );
  return ratedrestaurants;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant, setrestaurant] = useState(restaurantList);
  // console.log(restaurant, "vignesh123");

  // const [searchClicked,setSearchClicked]=useState('True');

  return (
    <div className="parent-div">
      <input
        type="search"
        placeholder="Search for a restaurant"
        className="search-bar"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          console.log(searchText, "vignesh");
        }}
      />
      <button
        onClick={() => {
          const result = filterResults(searchText, restaurant);
          setrestaurant(result);
          console.log(restaurant, "vignesh123");
        }}
      >
        Search
      </button>{" "}
      &nbsp;
      <button
        onClick={() => {
          const ratedrestaurants = filterByRating(restaurantList);
          setrestaurant(ratedrestaurants);
        }}
      >
        Restaurants above 4.0 rating
      </button>
      <div className="restaurant-list">
        {restaurant.map((item) => {
          return <RestaurantCard {...item.data} />;
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
