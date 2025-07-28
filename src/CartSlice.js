import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Each item: { name, image, description, cost, quantity }
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(p => p.name === item.name);
      if (!existing) {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const itemName = action.payload;
      state.items = state.items.filter(item => item.name !== itemName);
    },

    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const existing = state.items.find(item => item.name === name);
      if (existing) {
        existing.quantity += amount;
        if (existing.quantity < 1) {
          // Remove item if quantity drops below 1
          state.items = state.items.filter(item => item.name !== name);
        }
      }
    }
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
