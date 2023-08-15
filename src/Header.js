const AppName = () => {
  return (
    <div>
      <a href="#top">
        {" "}
        {/*change href to / incase of error */}
        <img
          className="logo"
          src="https://media.gettyimages.com/id/505891121/vector/cartoon-pizza-man-delivers-food-delivery.jpg?s=1024x1024&w=gi&k=20&c=9D_UPUG82JtxoAxWqz74K3SOJuRmnxhLfC9a-RGrt0g="
          alt="Mr.FoodY-Logo"
        ></img>
        <h3 className="title-logo">Mr.HedWig</h3>
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <AppName />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
