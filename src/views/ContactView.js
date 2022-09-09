import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import {
  addContact,
  getContact,
  deleteContact,
} from 'redux/contacts/contactOperations';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { Contacts } from 'components/Contacts/Contacts';

export default function ContactView() {
  const contactsState = useSelector(state => state.contacts.items);
  const filterState = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  const onFormSubmit = ({ name, number }) => {
    const isAddedContact = contactsState.find(contact => contact.name === name);
    if (isAddedContact) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContact({ name: name, number: number }));
  };

  const filteredContacts = () => {
    const filterToLowerCase = filterState.toLowerCase();
    return contactsState.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="container">
      <h1 className="mainTitle">Phonebook</h1>
      <AddContactForm onFormSubmit={onFormSubmit} />
      <h2 className="secondaryTitle">Contacts</h2>
      <ContactFilter />
      <Contacts
        contacts={filteredContacts()}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}
