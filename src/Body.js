import RestaurantCard from "./RestaurantCard";
import restaurantList from "./RestaurantList";
import { useState } from "react";

function filterdata(searchText, restaurantList) {
  const filterresult = restaurantList.filter((restaurant) =>
  restaurant.data.name.includes(filterresult)
  );
  return filterresult;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantList);
    console.log(filteredRestaurants,'vignesh123');

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
          // console.log(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const result = filterdata(searchText,filteredRestaurants);
          
          setFilteredRestaurants(result);
        }}
      >
        Search
      </button>
      <div className="restaurant-list">
        {restaurantList.map((ingaennavenumnakudukalam) => {
          return <RestaurantCard {...ingaennavenumnakudukalam.data} />;
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
