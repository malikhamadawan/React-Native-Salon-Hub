import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to store cart items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item exists
      } else {
        state.items.push({...item, quantity: 1}); // Add new item
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    clearCart: state => {
      state.items = []; // Empty the cart
    },
    updateQuantity: (state, action) => {
      const {id, quantity} = action.payload;
      const item = state.items.find(i => i.id === id);

      if (item && quantity > 0) {
        item.quantity = quantity;
      } else {
        state.items = state.items.filter(i => i.id !== id);
      }
    },
  },
});

// Export actions
export const {addItem, removeItem, clearCart, updateQuantity} =
  cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
