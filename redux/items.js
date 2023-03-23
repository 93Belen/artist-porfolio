import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'items',
    initialState: [],
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const items = createSlice(options);
export const { changeState } = items.actions;
export default items.reducer;