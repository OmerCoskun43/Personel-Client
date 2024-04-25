import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personnels: [],
  departments: [],
};

const personnelSlice = createSlice({
  name: "personnel",
  initialState,
  reducers: {
    personnelSuccess: (state, action) => {
      state.personnels = action.payload;
    },
    departmentSuccess: (state, action) => {
      state.departments = action.payload;
    },
  },
});

export const { departmentSuccess, personnelSuccess } = personnelSlice.actions;
export default personnelSlice.reducer;
