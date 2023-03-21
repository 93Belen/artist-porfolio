import { createSlice } from "@reduxjs/toolkit";

const options = createSlice({
    name: 'showModal',
    initialState: false,
    reducers: {
        changeState: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});


export const { changeState } = options.actions;
export default options.reducer;