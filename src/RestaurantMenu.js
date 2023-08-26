import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    
    const {restaurantid} = useParams();
    console.log(restaurantid, "vignesh");

  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const MENU_URL =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.034672&lng=77.039611&restaurantId=";
    const response = await fetch(MENU_URL + restaurantid);
    const data = await response.json();
    console.log(data, "123");
    setRestaurantInfo(data);
  };

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, locality, avgRatingString } =
    restaurantInfo?.data?.cards[0]?.card?.card?.info;
  const { lastMileTravelString } =
    restaurantInfo?.data?.cards[0]?.card?.card?.info?.sla;
  const { itemCards } =
    restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
      ?.card?.card;
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h4>{cuisines.join(",")}</h4>
      <h5>
        {locality}, {lastMileTravelString}
      </h5>
      <h5>Rated {avgRatingString}</h5>
      {/**Doubt: How to destructure the object  restaurantInfo?.data?.cards[0]?.card?.card?.info.name to name only, so that we can use {name} to bind*/}
      {/*UPDATE-Sorted it later*/}
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name.toUpperCase()}-{"Rs."}{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
