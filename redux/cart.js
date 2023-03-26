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
            const newState = state.filter(item => action.payload !== item[0]);
            state = newState;
            return state;
        },
        addQuantity: (state, action) => {
            const newState = state.map(item => {
                if(item[0] === action.payload[0]){
                    item = [item[0], item[1] + action.payload[1]]
                    return item;
                }
                else {
                    return item;
                }
            })
            state = newState;
            return state;
        }
    }
});


export const { add, remove, addQuantity } = options.actions;
export default options.reducer;