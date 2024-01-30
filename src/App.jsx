import React, { useState, useEffect } from 'react';
import { ContactList } from './components/ContactList/ContactList';
import contactsData from './components/Contacts/contacts.json';
import { SearchBar } from './components/SearchBox/SearchBox';
import { ContactForm } from './components/ContactForm/Componentform';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Зчитати контакти з localStorage при завантаженні сторінки
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  // Зберегти контакти в localStorage при їх зміні
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.filter((contact) => contact.id !== contactId);
      return updatedContacts;
    });
  };

  const handleSearchChange = (searchValue) => {
    setSearchTerm(searchValue.toLowerCase());
  };

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact];
      return updatedContacts;
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm)
  );

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
