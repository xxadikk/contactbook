import React, { useState } from 'react';

const EditContacts = (props) => {
    let [name, setName] = useState(props.editContact.name)
    let [surname, setSurName] = useState(props.editContact.surname)
    let [phone, setPhone] = useState(props.editContact.phone)


  function  handleSaveClick(){
    let contact = {...props.editContact}
    contact.name = name
    contact.surname = surname
    contact.phone = phone

    props.handleSaveEditedContact(contact)
    setName("");
    setSurName("");
    setPhone("")
  }
    return (
        <div className='container-1'>
             <input  className='input'
             value={name} 
             type="text" 
            placeholder='имя' 
             onChange={(e)=> setName (e.target.value)}/>
            <input className='input' 
            value={surname} 
            type="text"
             placeholder='фамилия'
              onChange={(e)=> setSurName(e.target.value)} />
            <input  className='input'
            value={phone}
             type="number" placeholder='номер' 
             onChange={(e)=> setPhone(e.target.value)} />
             <button className='button-1' onClick = {handleSaveClick}>Save</button>
        </div>
    );
};

export default EditContacts;