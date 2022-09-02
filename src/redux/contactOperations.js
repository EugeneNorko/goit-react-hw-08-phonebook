import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from './contactActions';
import {
  addContactApi,
  getContactApi,
  deleteContactApi,
} from './utils/mockApi';

export const addContact = contact => (dispatch, getState) => {
  dispatch(addContactRequest());
  addContactApi(contact)
    .then(newContact => dispatch(addContactSuccess(newContact)))
    .catch(err => dispatch(addContactError(err.message)));
};

export const getContact = createAsyncThunk(
  'contact/get',
  async (_, thunkApi) => {
    try {
      const contact = await getContactApi();
      return contact;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/delete',
  async (contactId, thunkApi) => {
    try {
      await deleteContactApi(contactId);
      return contactId;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
