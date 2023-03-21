import { configureStore } from "@reduxjs/toolkit";
import showModal from "./showModal";

export const store = configureStore({
    reducer: {
        showModal: showModal
    }
});


