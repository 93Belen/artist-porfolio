import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";

export const store = configureStore({
    reducer: {
        cart: cart
    }
});


