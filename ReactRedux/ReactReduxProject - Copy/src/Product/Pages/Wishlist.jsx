import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_to_cart } from "../../redux/Action";

const Wishlist = () => {
  const wishData = useSelector((state) => state.cartToWish);

  console.log("wishData", wishData);

  return (
    <div>
      <h1>This is wishlist Page</h1>
      {wishData.map((item) => {
        return (
          <>
            <ul key={item.id} className="bg-gray-500 border-2 ">
              <li>{item.name}</li>
              <li>{item.color}</li>
              <li>{item.price}</li>
            </ul>
            <button onClick={() => dispatch(add_to_cart(item))}>
              AddToCart
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Wishlist;
