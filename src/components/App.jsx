import { nanoid } from 'nanoid';
import React, { Component } from "react";


 

class App extends Component {
  
  state = {
    contacts: [],
    name: ''
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

  handleSubmit = event => {
    event.preventDefault();
    console.log(`stateSubmit`, this.state);
    this.reset();
  }

  reset = () => {
    this.setState({ name: '' });
  }
  
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101'
        }}
      >
        {/* React homework template */}

        <form onSubmit={this.handleSubmit}>
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
        </form>    
       

      </div>
    );
  }
  
};

export default App;