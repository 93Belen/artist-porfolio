import { createSlice } from "@reduxjs/toolkit";

const options = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
            return state;
        },
        remove: (state, action) => {
            const newState = state.filter((item, index) => {
                if(item === action.payload && state.indexOf(item) === index){
                }
                else {
                    return item;
                }
            });
            state = newState;
            return state;
        }
    }
});


export const { add, remove } = options.actions;
export default options.reducer;