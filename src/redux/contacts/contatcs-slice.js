import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, {payload}) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
           id: nanoid(),
           ...data,
          }
        }
      }
    },
    deleteContact: (state, {payload}) => state.filter(item => item.id !== payload),

  }
})

export const {addContact, deleteContact} = contactsSlice.actions;
export default contactsSlice.reducer;
// -------другий варіант----------
// import { createReducer } from "@reduxjs/toolkit";
// import { addContact, deleteContact } from "./contacts-actions";
// import { createSlice } from "@reduxjs/toolkit";

// const contactsReducer = createReducer([], {
//   [addContact]: (state, action) => [...state, action.payload],
//   [deleteContact]: (state, action) => state.filter(item => item.id !== action.payload),
// })

// export default contactsReducer;