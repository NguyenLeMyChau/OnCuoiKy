
import { createSlice } from "@reduxjs/toolkit";
const calculatorRTK = createSlice({
    name: "calcalationRTK",
    initialState: {
        result: 0
    },
    reducers: {
        plus: (state, action) => {
            state.result = Number(action.payload.inputOne) + Number(action.payload.inputTwo)
        },

        minus: (state, action) => {
            state.result = Number(action.payload.inputOne) - Number(action.payload.inputTwo)
        },

        multiply: (state, action) => {
            state.result = Number(action.payload.inputOne) * Number(action.payload.inputTwo)
        },

        divide: (state, action) => {
            state.result = Number(action.payload.inputOne) / Number(action.payload.inputTwo)
        }

    }
})

export const { plus, minus, multiply, divide } = calculatorRTK.actions;
export default calculatorRTK.reducer;