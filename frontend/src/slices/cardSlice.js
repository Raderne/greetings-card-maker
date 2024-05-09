import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    items: [],
  },
  reducers: {
    addCard: (state, action) => {
      state.items.push(action.payload);
    },
    removeCard: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addCard, removeCard } = cardSlice.actions;

export const selectCard = (state) => state.card.items;

export default cardSlice.reducer;