import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'items',
    initialState: [],
    reducers: {
        changeStateItems: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const items = createSlice(options);
export const { changeStateItems } = items.actions;
export default items.reducer;