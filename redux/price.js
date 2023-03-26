import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'price',
    initialState: '',
    reducers: {
        changeStatePrice: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const price = createSlice(options);
export const { changeStatePrice } = price.actions;
export default price.reducer;