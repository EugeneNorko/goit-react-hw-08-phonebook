import { useState, useEffect } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { ContactFilter } from './ContactFilter/ContactFilter';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    return window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = ({ name, number }) => {
    // console.log(name);
    const isAddedContact = contacts.find(contact => contact.name === name);

    if (isAddedContact) {
      return alert(`${name} is already in contacts`);
    }
    setContacts([{ id: nanoid(), name, number }, ...contacts]);
  };

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  const deleteContact = id => {
    let remainContacts = contacts.filter(contact => contact.id !== id);
    return setContacts([...remainContacts]);
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
