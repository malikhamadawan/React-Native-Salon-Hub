import {configureStore} from '@reduxjs/toolkit';
import selectedServicesReducer from './slices/selectedServicesSlice';
import cartReducer from './slices/cartSlice'; // Import the cart slice

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add cart reducer
    selectedServices: selectedServicesReducer,
  },
});

export default store;
