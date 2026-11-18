
import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [
    { id: 1, title: 'Велосипед', count: 5 },
    { id: 2, title: 'Самокат', count: 4 },
    { id: 3, title: 'Гантели', count: 7 },
    { id: 4, title: 'Ракетки', count: 1 }
  ],
  reducers: {
    increase: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item && item.count < 25) {
        item.count += 1;
      }
    },
    decrease: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item) {
        if (item.count === 1) {
          return state.filter(item => item.id !== action.payload);
        }
        item.count -= 1;
      }
    },
    addProduct: (state, action) => {
      state.push({
        id: Math.max(0, ...state.map(item => item.id)) + 1,
        title: action.payload,
        count: 1
      });
    }
  }
});

export const { increase, decrease, addProduct } = cartSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
});
