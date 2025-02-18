import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { product_set } from "../../redux/ProductAction";
import { add_to_cart } from "../../redux/Action";
import { useEffect } from "react";

const Shop = () => {
  const ProductData = useSelector((state) => state.product);
  const cartData = useSelector((state) => state.cart);

  console.log("ProductData", ProductData);
  console.log("cartData", cartData);

  
  const product = [
    {
      id: 1,
      name: "iPhone",
      color: "White",
      price: 150000,
    },
    {
      id: 2,
      name: "Television",
      color: "black",
      price: 25000,
    },
    {
      id: 3,
      name: "Laptop",
      color: "gray",
      price: 50000,
    },
    {
      id: 4,
      name: "Vivo",
      color: "green",
      price: 15000,
    },
    {
      id: 5,
      name: "Oppo",
      color: "red",
      price: 35000,
    },
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <h1>This is Product Page</h1>
      <button onClick={() => dispatch(product_set(product))}>
        Click For Action
      </button>
      {ProductData.flat().map((item) => {
        return (
          <ul key={item.id} style={{background:"yellow"}}>
            <li>{item.name}</li>
            <li>{item.color}</li>
            <li>{item.price}</li>
            <button onClick={() => dispatch(add_to_cart(item))} style={{background:"red",padding:"10px"}}>
              ADDTOCART
            </button>
          </ul>
        );
      })}
    </div>
  );
};

export default Shop;
