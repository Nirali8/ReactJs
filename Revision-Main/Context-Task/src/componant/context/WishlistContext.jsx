import { createContext, useContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://dummyjson.com/products")
      let data = await res.json()
      data = data.products
      console.log("data", data);
      setProductData(data);
      // console.log("productData", productData);
    }
    getData();
  },[])

  return (
    <WishlistContext.Provider value={{ productData, setProductData  }}>
      {children}
    </WishlistContext.Provider>
  );
};
export default WishlistContextProvider;

export const useWishlist = () => useContext(WishlistContext);
