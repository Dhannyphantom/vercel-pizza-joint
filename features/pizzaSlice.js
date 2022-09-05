import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  base: "",
  toppings: [],
  modal: false,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    addBase: (state, action) => {
      state.base = action.payload;
    },
    addTopping: (state, action) => {
      const check = state.toppings.find((str) => str === action.payload);
      if (check) {
        state.toppings = state.toppings.filter((str) => str !== check);
      } else {
        state.toppings.push(action.payload);
      }
    },
    reset() {
      return initialState;
    },
    setModal(state, action) {
      state.modal = action.payload;
    },
  },
});

export const { addBase, addTopping, setModal, reset } = pizzaSlice.actions;
export default pizzaSlice.reducer;
