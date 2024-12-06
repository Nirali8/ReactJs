import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cart_to_wishlist, remove_to_cart } from "../../redux/Action";

const Cart = () => {
  const CartData = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>This is cart Page</h1>
      {CartData.map((item) => {
        return (
          <>
            <ul key={item.id} className="bg-gray-500 border-2 ">
              <li>{item.name}</li>
              <li>{item.color}</li>
              <li>{item.price}</li>
            </ul>
            <button
              className="btn"
              onClick={() => dispatch(cart_to_wishlist(item))}
            >
              AddToWish
            </button>
            <button
              className="btn"
              onClick={() => dispatch(remove_to_cart(item))}
            >
              Remove
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Cart;
