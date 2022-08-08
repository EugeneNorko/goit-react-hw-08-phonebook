import { createSlice } from '@reduxjs/toolkit';
const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: localStorageContacts ?? [],
  reducers: {
    addContact(state, action) {
      return (state = action.payload);
    },
    removeContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
