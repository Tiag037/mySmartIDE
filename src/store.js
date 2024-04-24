import { configureStore } from "@reduxjs/toolkit";
import tabs from "./features/tabs";
import preview from "./features/Preview";
export const store = configureStore({
  reducer: {
    tabs,
    preview,
  },
});
