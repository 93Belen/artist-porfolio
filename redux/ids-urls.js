import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'ids-urls',
    initialState: [],
    reducers: {
        changeStateIdUrls: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const idsUrls = createSlice(options);
export const { changeStateIdUrls } = idsUrls.actions;
export default idsUrls.reducer;