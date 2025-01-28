import WishlistContext from "./WishlistContext";
import { ProductContext } from "./WishlistContext";
import { useState, useEffect } from "react";

const WishlistContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleWishlistItem = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId)
        : [...prevWishlist, productId]
    );
  };

  const handleRemove = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <ProductContext.Provider value={{products,loading}}>
        <WishlistContext.Provider value={{ wishlist, toggleWishlistItem,handleRemove }}>
          {children}
        </WishlistContext.Provider>
      </ProductContext.Provider>
    </div>
  );
};

export default WishlistContextProvider;
