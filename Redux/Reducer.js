let initialState = {
    result: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "plus":
            return {
                result: Number(action.payload.inputOne) + Number(action.payload.inputTwo)
            }

        case "minus":
            return {
                result: Number(action.payload.inputOne) - Number(action.payload.inputTwo)
            }

        case "multiply":
            return {
                result: Number(action.payload.inputOne) * Number(action.payload.inputTwo)

            }

        case "divide":
            return {
                result: Number(action.payload.inputOne) / Number(action.payload.inputTwo)

            }

        default:
            return state;
    }
}