import { createSlice } from "@reduxjs/toolkit";
import * as actions from './contacts-action'

const initialState = {
  items: [],
  loading: false,
  error: null,
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [actions.fetchContactsLoading]: (store) => {
      store.loading = true;
    },
    [actions.fetchContactsSuccess]: (store, action) => {
      store.loading = false;
      store.items = action.payload;
    },
    [actions.fetchContactsError]: (store, action) => {
      store.loading = false;
      store.error = action.payload;
    },

    [actions.fetchAddContactsLoading]: (store) => {
      store.loading = true;
    },
    [actions.fetchAddContactsSuccess]: (store, action) => {
      store.loading = false;
      store.items.push(action.payload);
    },
    [actions.fetchAddContactsError]: (store, action) => {
      store.loading = false;
      store.error = action.payload;
    },

    [actions.fetchDeleteContactsLoading]: (store) => {
      store.loading = true;
    },
    [actions.fetchDeleteContactsSuccess]: (store, action) => {
      store.loading = false;
      const index = store.items.findIndex(item => item.id === action.payload);
      store.items.splice(index, 1);
    },
    [actions.fetchDeleteContactsError]: (store, action) => {
      store.loading = false;
      store.error = action.payload;
    }
  }
})

export const {addContact, deleteContact} = contactsSlice.actions;
export default contactsSlice.reducer;
