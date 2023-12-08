import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "user",
    initialState: {
        id: "",
        username: "",
        password: "",
        english: [{}],
        vietnamese: [{}]
    },
    reducers: {
        addUser: (state, action) => {
            const { id, username, password, english, vietnamese } = action.payload;
            state.id = id;
            state.username = username;
            state.password = password;
            state.english = english;
            state.vietnamese = vietnamese;

        },
        addWord: (state, action) => {
            // Logic to add a word to the user's vocabulary
            const { titleEng, titleVie } = action.payload;
            state.english.push({ titleEng })
            state.vietnamese.push({ titleVie })
        },

    }

});

export const { addUser, addWord } = noteSlice.actions;

export default noteSlice.reducer;
