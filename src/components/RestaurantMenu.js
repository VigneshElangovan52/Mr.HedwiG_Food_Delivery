import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";



const RestaurantMenu = () => {
  const { restaurantid } = useParams();

  const restaurantInfo = useRestaurantMenu(restaurantid);

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
    <div>
      <div className="my-4 p-2 border border-solid border-gray-500 rounded-lg">
      <h1 className="font-bold text-2xl text-left my-5">{name}</h1>
      <h4>{cuisines.join(",")}</h4>
      <h5>
        {locality}, {lastMileTravelString}
      </h5>
      <h5>Rated {avgRatingString}</h5>
      </div>
      {/**Doubt: How to destructure the object  restaurantInfo?.data?.cards[0]?.card?.card?.info.name to name only, so that we can use {name} to bind*/}
      {/*UPDATE-Sorted it later*/}
      <ul>
        {category.map((item) => (
          <li className="text-left py-5 text- my-2 border border-solid border-gray-500 rounded-lg font-serif font-bold">
            {item.card.card.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
