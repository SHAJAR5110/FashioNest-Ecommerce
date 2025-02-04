// src/redux/store.js
"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartslice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;