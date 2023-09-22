import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-10 p-10 ">
      <div className="flex px-5">
        <h1 className="m-auto font-bold text-xl border border-black w-20 rounded-2xl">Cart</h1>
        <button className="bg-gray-700 text-white border hover:bg-black border-solid border-black rounded-md px-2 w-32" onClick={clearCartHandler}>Clear Cart</button>
      </div>
      {cartItems.length === 0 && <h1 className="font-bold text-2xl p-4">Your Cart is empty! Add any item to place an order😋🍔🥗</h1>}
      <div>
        <CategoryItems data={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
