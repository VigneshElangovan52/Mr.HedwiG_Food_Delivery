import RestaurantCard, {isPromoted} from "./RestaurantCard";
// import restaurantList from "./RestaurantList";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import CorsErrorByPass from "./CorsErrorBypass";



const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantData, setrestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState ([]);
  //const [userName, setUserName] = useState("");
  //console.log(restaurantList, "mockData");
  // console.log(restaurant, "vignesh123");
  // const [searchClicked,setSearchClicked]=useState('True');

  const userStatus = useOnlineStatus();

  const {loggedInBy, setUser} = useContext(UserContext);

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

  const PromotedRestaurant = isPromoted(RestaurantCard);

  if (userStatus === false) return <h1>Oops, seems like you're disconnected! Please check internet connectivity</h1>;
  
  if(filteredRestaurants.length === 0) return <CorsErrorByPass />;

  // const {id} = filteredRestaurants?.info;

  return (
    <div className="parent-div my-2 mx-10">
      <input
        type="search"
        placeholder=" Search for a restaurant "
        className="mx-4 my-2 pl-2 rounded-md border border-solid border-black"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          //console.log(searchText, "vignesh");
        }}
      />
      <button
        className="bg-stone-800 text-white border hover:bg-black border-solid border-black rounded-md px-2"
        onClick={() => {
          const result = filterResults(searchText, restaurantData);
          setFilteredRestaurants(result);
        }}
      >
        Search
      </button>{" "}
      &nbsp;
      <button className="bg-stone-800 text-white hover:bg-black border border-solid border-black rounded-md px-2"
        onClick={() => {
          const ratedrestaurants = filterByRating(restaurantData);
          setFilteredRestaurants(ratedrestaurants);
        }}
      >
        Restaurants above 4.0 rating
      </button>
      &nbsp;
      <label className="ml-4 my-2 pl-2 ">Change User Name : </label>
      <input className="mx-2 my-2 pl-2 rounded-md border border-solid border-black"type = "search" placeholder="Type UserName" value={loggedInBy} onChange={(e)=>{setUser(e.target.value);}}></input>
      <div className="flex flex-wrap mt-3">
        {filteredRestaurants.map((item) => {
          return <Link key = {item.info.id} to= {"/restaurant/"+ item.info.id}>
            {(item.info.avgRating > "4.0") ? <PromotedRestaurant {...item.info}/> : <RestaurantCard {...item.info} />}
            </Link>;
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
