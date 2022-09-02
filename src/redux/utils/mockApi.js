import axios from 'axios';

export const addContactApi = contact => {
  return axios
    .post('https://6310c75a36e6a2a04ef77841.mockapi.io/contacts', contact)
    .then(res => ({ ...contact, id: res.data.id }));
};

export const getContactApi = () => {
  return axios
    .get('https://6310c75a36e6a2a04ef77841.mockapi.io/contacts')
    .then(res => res.data);
};

export const deleteContactApi = contactId => {
  return axios
    .delete(`https://6310c75a36e6a2a04ef77841.mockapi.io/contacts/${contactId}`)
    .then(res => res.data);
};
