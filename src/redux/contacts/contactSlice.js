import { createSlice } from '@reduxjs/toolkit';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
} from './contactActions';
import { getContact, deleteContact } from './contactOperations';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [addContactRequest]: (state, action) => {
      state.isLoading = true;
    },
    [addContactSuccess]: (state, { payload }) => {
      state.isLoading = false;
      state.items = [...state.items, payload];
    },
    [addContactError]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getContact.pending]: state => {
      state.isLoading = true;
    },
    [getContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [getContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(contact => contact.id !== payload);
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { changeFilter } = contactSlice.actions;
