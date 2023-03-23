import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import idsUrls from "./ids-urls";
import itemChosen from "./itemChosen";
import items from "./items";

export const store = configureStore({
    reducer: {
        cart: cart,
        items: items,
        idsUrls: idsUrls,
        itemChosen: itemChosen
    }
});


