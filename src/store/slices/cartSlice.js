import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchedItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getDataFromServer(state, action) {
      let data = action.payload;
      let arr =[]
      for (let key in data) {
        arr.push({
          id: data[key].id,
          title: data[key].title,
          price: data[key].price,
          description: data[key].description,
        });
      }
      state.fetchedItems = arr
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
