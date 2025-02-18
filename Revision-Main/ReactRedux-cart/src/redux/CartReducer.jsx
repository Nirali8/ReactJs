import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  EMPTY_CART,
  CART_TO_WISHLIST,
} from "./Constant";

const CartReducer = (state = [], action) => {
  switch (action.type) {
    // case ADD_TO_CART:return[action.payload , ...state]
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_TO_CART:
      // const removeCartData = state.filter(
      //   (state) => state.id !== action.payload.id
      // );

      // console.log(removeCartData);

    // return [...removeCartData];
      
      const indexToDelete = state.findIndex((state) => state.id === action.payload.id);
      state.splice(indexToDelete, 1);
      return [...state]
    
    case EMPTY_CART:
      return {};
    default:
      return state;
  }
};

// Array.filter((index) => index > 10 )

export const cartToWishReducer = (state = [], action) => {
  switch (action.type) {
    case CART_TO_WISHLIST:
      console.log("cartToWishReducerCalled");
      return [...state, action.payload];
    default:
      return state;
  }
};

export default CartReducer;
