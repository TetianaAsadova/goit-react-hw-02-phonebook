import React from "react";
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
    
export default ContactList;