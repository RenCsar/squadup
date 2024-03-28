import { configureStore } from "@reduxjs/toolkit";
import { talentsSlice } from "./reducers/talent.Slice";

export const Store = configureStore({
    reducer: {
        talent: talentsSlice.reducer,
    }
});

export type RootState = ReturnType<typeof Store.getState>;