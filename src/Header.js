import { useState } from "react";
import { Link } from "react-router-dom";


const AppName = () => {
  return (
    <div>
    <Link to = "/#top">
        <img
          className="logo"
          src="https://media.gettyimages.com/id/505891121/vector/cartoon-pizza-man-delivers-food-delivery.jpg?s=1024x1024&w=gi&k=20&c=9D_UPUG82JtxoAxWqz74K3SOJuRmnxhLfC9a-RGrt0g="
          alt="Mr.FoodY-Logo"
        ></img></Link>
        <Link to = "/#top"><h3 className="title-logo">Mr.HedWig</h3></Link>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState ("Log In");

  const LogInStatus = () => {
    (isLoggedIn === "Log In") ? 
    setIsLoggedIn ("Log Out") : setIsLoggedIn ("Log In");
  }

  return (
    <div className="header">
      <AppName />
      <div className="nav-items">
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/about">About</Link></li>
          <li><Link to = "/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button onClick = {LogInStatus}>{isLoggedIn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
