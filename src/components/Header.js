import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const AppName = () => {
  return (
    <div className="flex items-center">
    <Link to = "/#top">
        <img
          className="w-24 h-16 border border-solid border-red-700 rounded-lg"
          src="https://media.gettyimages.com/id/505891121/vector/cartoon-pizza-man-delivers-food-delivery.jpg?s=1024x1024&w=gi&k=20&c=9D_UPUG82JtxoAxWqz74K3SOJuRmnxhLfC9a-RGrt0g="
          alt="Mr.FoodY-Logo"
        ></img></Link>
        <Link to = "/#top"><h3 className="font-bold text-xl hover:italic ml-3">Mr.HedWig</h3></Link>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState ("Log Out");

  const LogInStatus = () => {
    (isLoggedIn === "Log In") ? 
    setIsLoggedIn ("Log Out") : setIsLoggedIn ("Log In");
  }

  const userStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 p-4 rounded-xl border shadow-lg shadow-slate-900 ">
      <AppName />
      <div className="flex items-center">
        <ul className="flex items-center">
          <li className="items-center p-4">User Status : {((userStatus && isLoggedIn === 'Log Out') ? 'Online✅' : 'Offline🔴' )}</li>
          <li className="items-center p-4"><Link to = "/">Home</Link></li>
          <li className="items-center p-4"><Link to = "/instamart">InstaMart</Link></li>
          <li className="items-center p-4"><Link to = "/about">About</Link></li>
          <li className="items-center p-4"><Link to = "/contact">Contact Us</Link></li>
          <li className="items-center p-4">Cart</li>
          <button className = "px-2 rounded-md hover:bg-pink-300 active:bg-slate-200-700 border border-solid border-black font-bold" onClick = {LogInStatus}>{isLoggedIn} {(isLoggedIn === 'Log Out') ? '🔒' : '🔑'}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
