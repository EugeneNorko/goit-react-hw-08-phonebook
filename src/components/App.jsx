import { useEffect } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeContact } from 'redux/contactSlice';
import { changeFilter } from 'redux/filterSlice';

export const App = () => {
  const contactsState = useSelector(state => state.contacts);
  const filterState = useSelector(state => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    return window.localStorage.setItem(
      'contacts',
      JSON.stringify(contactsState)
    );
  }, [contactsState]);

  const onFormSubmit = ({ name, number }) => {
    const isAddedContact = contactsState.find(contact => contact.name === name);
    if (isAddedContact) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact([{ id: nanoid(), name, number }, ...contactsState]));
  };

  const onChangeFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  const filteredContacts = () => {
    const filterToLowerCase = filterState.toLowerCase();
    return contactsState.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  const deleteContact = id => {
    let remainContacts = contactsState.filter(contact => contact.id !== id);
    return dispatch(removeContact(remainContacts));
  };

  return (
    <div className="container">
      <h1 className="mainTitle">Phonebook</h1>
      <AddContactForm onFormSubmit={onFormSubmit} />
      <h2 className="secondaryTitle">Contacts</h2>
      <ContactFilter onFilterContacts={onChangeFilter} />
      <Contacts contacts={filteredContacts()} onDeleteContact={deleteContact} />
    </div>
  );
};
