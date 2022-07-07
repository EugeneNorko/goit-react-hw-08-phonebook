import React, { Component } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { ContactFilter } from './ContactFilter/ContactFilter';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const Contacts = localStorage.getItem('Contacts');
    const parsedContacts = JSON.parse(Contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const nextList = this.state.contacts;
    const prevList = prevState.contacts;

    if (prevList !== nextList) {
      return localStorage.setItem('Contacts', JSON.stringify(nextList));
    }
  }

  formSubmitHandler = ({ name, number }) => {
    const isAddedContact = this.state.contacts.find(
      contact => contact.name === name
    );

    if (isAddedContact) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(({ contacts }) => {
      return { contacts: [{ id: nanoid(), name, number }, ...contacts] };
    });
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const filterToLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  deleteContact = id => {
    let remainContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    return this.setState({ contacts: [...remainContacts] });
  };

  render() {
    return (
      <div className="container">
        <h1 className="mainTitle">Phonebook</h1>
        <AddContactForm onFormSubmit={this.formSubmitHandler} />
        <h2 className="secondaryTitle">Contacts</h2>
        <ContactFilter onFilterContacts={this.onChangeFilter} />
        <Contacts
          contacts={this.filteredContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
