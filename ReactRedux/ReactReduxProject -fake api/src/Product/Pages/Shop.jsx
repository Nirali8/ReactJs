import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { product_set } from "../../redux/ProductAction";
import { add_to_cart } from "../../redux/Action";

const Shop = () => {
  const ProductData = useSelector((state) => state.product);
  const cartData = useSelector((state) => state.cart);

  console.log("ProductData", ProductData);
  console.log("cartData", cartData);

  async function productApi() {
    let response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json()
    // console.log(data);
    setProductApiData(data)
  }

  const dispatch = useDispatch();

  return (
    <div>
      <h1>This is Product Page</h1>
      <button onClick={() => dispatch(product_set(product))}>
        Click For Action
      </button>
      {ProductData.flat().map((item) => {
        return (
          <ul key={item.id} className="bg-gray-500 border-2 ">
            <li>{item.name}</li>
            <li>{item.color}</li>
            <li>{item.price}</li>
            <button onClick={() => dispatch(add_to_cart(item))}>
              ADDTOCART
            </button>
          </ul>
        );
      })}
    </div>
  );
};

export default Shop;
