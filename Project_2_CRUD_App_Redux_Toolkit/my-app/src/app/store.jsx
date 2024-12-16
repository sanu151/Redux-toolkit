import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/BookSlice";

const store = configureStore({
  reducer: {
    bookReducer,
  },
});

export default store;
