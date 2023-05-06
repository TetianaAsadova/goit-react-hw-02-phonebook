import React from "react";
import PropTypes from 'prop-types';
import './ContactList.css';

const ContactList = ({ contacts, onDeliteContact }) => {
    return (
        <div className="ContactList">
            <ul>
                {contacts.map(({ id, name, number }) => (
                    <li key={id} className="ContactList__item">
                        <p className="ContactList__text">{name}:  {number}</p>
                        <button onClick={() => onDeliteContact(id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
    
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    )
    
}
    
export default ContactList;