import css from './ContactList.module.css'

import React from 'react';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={css.name}>
      <ul>
        {contacts.map(contact => (
          <div key={contact.id} className={css.cont}>
            <li className={css.list} >
              <strong >{contact.name}</strong> - {contact.number}
            </li>
            <button onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

