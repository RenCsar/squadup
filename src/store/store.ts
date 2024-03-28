import { configureStore } from "@reduxjs/toolkit";
import { talentsSlice } from "./reducers/talent.Slice";
import { globalStates } from "./reducers/globalStates.Slice";

export const Store = configureStore({
    reducer: {
        talent: talentsSlice.reducer,
        globalStates: globalStates.reducer,
    }
});

export type RootState = ReturnType<typeof Store.getState>;