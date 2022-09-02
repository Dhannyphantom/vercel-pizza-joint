import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  base: "",
  toppings: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    addBase: (state, action) => {
      state.base = action.payload;
    },
    addToppings: (state, action) => {
      const check = state.toppings.find((str) => str === action.payload);
      if (check) {
        state.toppings = state.toppings.filter((str) => str !== check);
      } else {
        state.toppings.push(action.payload);
      }
    },
  },
});

export const { addBase, addToppings } = pizzaSlice.actions;
export default pizzaSlice.reducer;