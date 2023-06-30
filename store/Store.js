import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./cartSlice";

const Store = configureStore({
    reducer:{
        cart:Cartslice,
    }
});

export default Store;