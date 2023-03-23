import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'itemChosen',
    initialState: [],
    reducers: {
        changeStateitemChosen: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const itemChosen = createSlice(options);
export const { changeStateitemChosen } = itemChosen.actions;
export default itemChosen.reducer;