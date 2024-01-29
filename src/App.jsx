
import React, { useState, useEffect } from 'react';
import { ContactList } from './assets/Components/ContactList/ContactList';
import contactsData from './assets/Components/Contacts/contacts.json';
import { SearchBar } from './assets/Components/SearchBox/SearchBox';
import { ContactForm } from './assets/Components/ContactForm/Componentform';
function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : contactsData;
  });

  const [searchTerm, setSearchTerm] = useState('');

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.filter((contact) => contact.id !== contactId);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const handleSearchChange = (searchValue) => {
    setSearchTerm(searchValue.toLowerCase());
  };

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact];
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm)
  );

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);
  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <ContactForm onAddContact={addContact} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
