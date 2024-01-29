

import React from 'react';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <div key={contact.id}>
            <li>
              <strong>{contact.name}</strong> - {contact.number}
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

