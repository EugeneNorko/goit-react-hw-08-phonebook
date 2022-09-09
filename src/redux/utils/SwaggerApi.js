import axios from 'axios';

export const addContactApi = contact => {
  return axios
    .post('/contacts', contact)
    .then(res => ({ ...contact, id: res.data.id }));
};

export const getContactApi = () => {
  return axios.get('/contacts').then(res => res.data);
};

export const deleteContactApi = contactId => {
  return axios.delete(`/contacts/${contactId}`).then(res => res.data);
};
