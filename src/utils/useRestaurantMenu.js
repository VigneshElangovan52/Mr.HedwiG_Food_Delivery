import { useEffect, useState } from "react"
import { MENU_URL } from "./constants";



const useRestaurantMenu = (restaurantid)  => {

    const [resMenu, setResMenu] = useState(null);

    useEffect(()=>{
        fetchRestaurantMenu();
    }, []);

    const fetchRestaurantMenu = async () =>{
    
    const response = await fetch(MENU_URL + restaurantid);
    const data = await response.json();
    setResMenu(data);
    }

    return resMenu;

}

export default useRestaurantMenu;