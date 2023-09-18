import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";



const RestaurantMenu = () => {
  const { restaurantid } = useParams();
  const restaurantInfo = useRestaurantMenu(restaurantid);

  const [selectedIndex, setSelectedIndex] = useState(0);

  //**Line 17-28 is optimized by using the custom Hook useRestaurantMenu() which takes care of the responsibility of getting the restaurant menu list*/

  // const [restaurantInfo, setRestaurantInfo] = useState(null);
  // useEffect(() => {
  //   fetchRestaurantMenu();
  // }, []);
  // const fetchRestaurantMenu = async () => {
  //   const response = await fetch(MENU_URL + restaurantid);
  //   const data = await response.json();
  //   console.log(data, "123");
  //   setRestaurantInfo(data);
  // };

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, locality, avgRatingString } =
    restaurantInfo?.data?.cards[0]?.card?.card?.info;
  const { lastMileTravelString } =
    restaurantInfo?.data?.cards[0]?.card?.card?.info?.sla;
  // const { itemCards } =
  //   restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
  //     ?.card?.card;
      const category = restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(data=>data?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(category);

  return (
    <div className="text-center">
      <div className="my-4 p-2 rounded-lg">
        <h1 className="font-bold text-2xl my-3">{name}</h1>
        <p className="font-medium">
          {cuisines.join(",")} | {locality}, {lastMileTravelString} | Rated{" "}
          {avgRatingString}
        </p>
      </div>
      {/**Doubt: How to destructure the object  restaurantInfo?.data?.cards[0]?.card?.card?.info.name to name only, so that we can use {name} to bind*/}
      {/*UPDATE-Sorted it later*/}
      {category.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          showItems={index === selectedIndex ? true : false}
          setSelectedIndex={() => {
            setSelectedIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
