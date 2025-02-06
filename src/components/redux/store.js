import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice'; // Import the cart slice

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add cart reducer
  },
});

export default store;
