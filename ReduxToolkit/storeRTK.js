

import { configureStore, createStore } from "@reduxjs/toolkit";
import calculatorRTK from "./reducers/calculatorRTK";
import userSlice from "./reducers/userSlice";
import noteSlice from "./reducers/nodeSlice";


export const storeRTK = configureStore({
    reducer: {
        calculatorRTK: calculatorRTK,
        users: userSlice,
        note: noteSlice
    }
})
