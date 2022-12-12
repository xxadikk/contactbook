import React, { useState } from "react";
import Addcontact from "./components/AddContact/Addcontact";
import ContactsList from "./components/ContactsList/ContactsList";
import EditContacts from "./components/EditContacts/EditContacts";

const App = () => {
  // ! создание контакта
  let [contacts, setContacts] = useState([]);

  let [editContact, setEditContact] = useState({});

  let [isEdit, setIsEdit] = useState(false);

  function handleNewContact(newContact) {
    let newContactArray = [...contacts];
    newContactArray.push(newContact);
    setContacts(newContactArray);
  }
  //  ! удаление
  function handleDeleteContact(id) {
    let newContactArray = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContactArray);
  }
  function handleEditIndex(index) {
    setIsEdit(true);
    setEditContact(contacts[index]);
  }
  function handleSaveEditedContact(newContact) {
    let newContactArray = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });
    setContacts(newContactArray);
    setIsEdit(false);
  }
  return (
    <div>
      <h1>Contact Book</h1>
      <Addcontact handleNewContact={handleNewContact} />
      <ContactsList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditIndex={handleEditIndex}
      />
      {isEdit ? (
        <EditContacts
          editContact={editContact}
          handleSaveEditedContact={handleSaveEditedContact}
        />
      ) : null}
    </div>
  );
};

export default App;
