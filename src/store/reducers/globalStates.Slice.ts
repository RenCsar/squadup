import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: ''
};

export const globalStates = createSlice({
    name: "globalStates",
    initialState: initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        }
    }
});

export const { setEmail } = globalStates.actions;