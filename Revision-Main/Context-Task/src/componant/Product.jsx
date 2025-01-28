import React, { useContext } from 'react'
import WishlistContext, { ProductContext } from "./context/WishlistContext";

const Product = () => {

      const { wishlist, handleRemove } = useContext(WishlistContext);
      const { products } = useContext(ProductContext);

      const wishlistItems = products.filter((product) =>
        wishlist.includes(product.id)
      );
  console.log(wishlistItems);

      return (
        <div className="grid grid-cols-4 m-10 gap-4">
          <h1>This is Product PAge</h1>
          {wishlistItems.map((item) => (
            <div key={item.id} className="h-auto w-60 shadow-xl m-auto">
              <img
                src={item.images[0]}
                alt={item.title}
                className="h-40 w-40 m-auto"
              />
              <h3 className="m-2">{item.title}</h3>
              <p className="m-2">${item.price}</p>
              <button onClick={() => handleRemove(item.id)}>
                <IoIosRemoveCircle />
              </button>
            </div>
          ))}
        </div>
      );
}

export default Product
