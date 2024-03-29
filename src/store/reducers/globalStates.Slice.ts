import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    limit: 7,
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