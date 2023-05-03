import { nanoid } from 'nanoid';
import React, { Component } from "react";
import ContactEditor from './ContactEditor/ContactEditor';
import ContactList from './ContactList/ContactList';


class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  addContact = text => {
    console.log(`text`, text);
    const contact = {
      id: nanoid(),
      name: text,
    };
    console.log(`contact`, contact);

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
      name: [text, ...prevState.name],
    }));
    console.log(`contactsAdd`, this.state)
  }

  handleInputChange = event => {
    const id = nanoid();
    console.log(`id`, id);
    this.setState({
      contacts: [{
        id: id,
        name: event.currentTarget.value
      }],
      name: event.currentTarget.value
    });
    console.log(`stateInput`, this.state);
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(`stateSubmit`, this.state);
  //   this.reset();
  // }

  // reset = () => {
  //   this.setState({ name: '' });
  // }

  // deliteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }))    
  // }
  
  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 20,
          color: '#010101'
        }}
      >

        <ContactEditor onSubmitEditor={this.addContact}/>
        <ContactList contacts={this.state.contacts}/>
        
        {/* <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                 /> 
          </label>
          <button type="submit">Add contact</button>
        </form>     */}
       

      </div>
    );
  }
  
};

export default App;