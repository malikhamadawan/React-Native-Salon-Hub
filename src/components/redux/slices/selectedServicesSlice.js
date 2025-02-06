// slices/selectedServicesSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedServices: [],
  totalPrice: 0,
};

const selectedServicesSlice = createSlice({
  name: 'selectedServices',
  initialState,
  reducers: {
    addService: (state, action) => {
      state.selectedServices.push(action.payload);
      state.totalPrice += parseInt(action.payload.price, 10);
    },
    removeService: (state, action) => {
      const removedService = state.selectedServices.find(
        service => service.id === action.payload.id,
      );
      state.selectedServices = state.selectedServices.filter(
        service => service.id !== action.payload.id,
      );
      state.totalPrice -= parseInt(removedService.price, 10);
    },
    clearServices: state => {
      state.selectedServices = [];
      state.totalPrice = 0;
    },
  },
});

export const {addService, removeService, clearServices} =
  selectedServicesSlice.actions;

export default selectedServicesSlice.reducer;
