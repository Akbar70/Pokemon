import { configureStore } from "@reduxjs/toolkit";
import pokS from "./pokS";

const store = configureStore({
    reducer: {
        pokS: pokS
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch