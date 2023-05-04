import { nanoid } from 'nanoid';
import React, { Component } from "react";
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import './App.css';

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }

  addContact = ({ text, phone }) => {
    console.log(`text`, text);
    console.log(`phone`, phone);

    // colorPickerOptions.find(option => option.label === "blue");
    const contact = {
      id: nanoid(),
      name: text,
      number: phone, 
    };
    console.log(`contact`, contact);

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    console.log(`contactsAdd`, this.state)
  }

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
    console.log(`filter`, this.state.filter);
  }

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.text.toLowerCase().includes(normalizedFilter),
    );
  }
  

  deliteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))    
  }
  
  render() {
    const { filter } = this.state;
  
    // const visibleContacts = this.getVisibleContacts();
    return (
      <div className='App'>
        <h1>Phonebook</h1>

        <ContactForm onSubmitEditor={this.addContact} />

        <h2>Contacts</h2>

        <Filter value={filter} changeFilter={this.changeFilter} />

        <ContactList contacts={this.state.contacts} onDeliteContact={this.deliteContact}/>
        {/* <ContactList contacts={visibleContacts} /> */}

      </div>
    );
  }
  
};

export default App;