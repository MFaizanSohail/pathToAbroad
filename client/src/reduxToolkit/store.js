import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { rolesReducer } from "./rolesReducer";
import blogsReducer from "./blogsReducer";

const store = configureStore({
  reducer: {
    root: rootReducer,
    role: rolesReducer,
    blogs: blogsReducer,
  },
});

export default store;
