import React from "react";
import './ContactList.css';

const ContactList = ({ contacts }) => {
    return (
        <div className="ContactList">
            <p className="ContactList__name">Contacts</p>
            <ul>
                {contacts.map(({ id, name }) => (
                    <li key={id}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
    
};
    
export default ContactList;