import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
  id: string;
  name: string;
  img: string;
  price: number;
  quantity: number;
}

const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const productIndex = state.findIndex((pro) => pro.id === action.payload.id);
      if (productIndex === -1) {
        state.push(action.payload);
      } else {
        state[productIndex].quantity += 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
