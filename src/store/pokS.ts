import { createSlice } from "@reduxjs/toolkit";

const initialState: { name: string } = {
  name: "",
};

const pokS = createSlice({
  name: "pokS",
  initialState,
  reducers: {
    setPok: (s, a) => {
      s.name = a.payload;
      console.log(s.name)
    },
  },
});
export default pokS.reducer;
export const { setPok } = pokS.actions;
