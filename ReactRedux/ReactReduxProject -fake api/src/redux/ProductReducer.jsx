import React from 'react'

import { PRODUCT_SET } from "./Constant";

const ProductReducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCT_SET:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default ProductReducer
