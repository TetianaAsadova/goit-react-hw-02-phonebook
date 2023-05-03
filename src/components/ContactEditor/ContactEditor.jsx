import React, { Component } from "react";
import './ContactEditor.css';

class ContactEditor extends Component {
    state = {
        text: '',
    };

    handleChange = event => {
        this.setState({ text: event.currentTarget.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(`this.state`, this.state);
        this.props.onSubmitEditor(this.state.text);
        this.reset();
    }

    reset = () => {
        this.setState({ text: '' });
    }

    render() {
        return (
            <div className="ContactEditor">
                <p className="ContactEditor__text">Phonebook</p>
                <form className="ContactEditor__form" onSubmit={this.handleSubmit}>
                    <label className="ContactEditor__label" htmlFor="">
                        <p className="ContactEditor__name">Name</p>
                        <input
                            type="text"
                            value={this.state.text}
                            onChange={this.handleChange}
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        /> 
                    </label>
                    <button type="submit">Add contact</button>
                </form>
            </div>
             

            // <form className="ContactEditor" onSubmit={this.handleSubmit}>
            //     Name  
            //     <textarea
            //         className="ContactEditor__textsrea"
            //         value={this.setState.text}
            //         onChange={this.handleChange}
            //     ></textarea>
            //     <button type="submit" className="ContactEditor__button">
            //         Add contact
            //     </button>
            // </form>
        );
    }

}

export default ContactEditor;