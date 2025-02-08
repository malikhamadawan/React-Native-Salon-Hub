import {configureStore} from '@reduxjs/toolkit';
import selectedServicesReducer from './slices/selectedServicesSlice';
import cartReducer from './slices/cartSlice';
import profileImageupdateReducer from './slices/profileImageupdate';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    selectedServices: selectedServicesReducer,
    profileImageupdate: profileImageupdateReducer,
  },
});

export default store;
