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
      state.totalPrice += action.payload.price;
    },
    removeService: (state, action) => {
      state.selectedServices = state.selectedServices.filter(
        service => service.id !== action.payload.id, // Ensure correct comparison
      );
      state.totalPrice -= action.payload.price;
    },
  },
});

export const {addService, removeService} = selectedServicesSlice.actions;
export default selectedServicesSlice.reducer;
