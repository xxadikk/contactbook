import React, { useState } from 'react';
import   "./style.css"
const Addcontact = (props) => {
    let [name, setName] = useState("")
    let [surname, setSurName] = useState("")
    let [phone, setPhone] = useState("")

    function handleClick (){
        let newContact = {
            name, 
            surname,
            phone,
            id: Date.now()
        }
        props.handleNewContact(newContact)
        setName("");
        setSurName("");
        setPhone("")
    }
    return (
        <div className='container'>
            <input className="input" value={name} type="text" placeholder='имя'  onChange={(e)=> setName (e.target.value)}/>
            <input className='input' value={surname} type="text" placeholder='фамилия' onChange={(e)=> setSurName(e.target.value)} />
            <input className='input' value={phone} type="number" placeholder='номер'onChange={(e)=> setPhone(e.target.value)} />
            <button onClick={handleClick} >Add Contact</button>
        </div>
    );
};

export default Addcontact;