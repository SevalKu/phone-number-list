import {useState, useEffect} from 'react'

import List from "./List"
import Form from "./Form"
import  "./style.css"
function Contacts() {
    const [contacts, setContacts] = useState([{
        fullname: "Seval",
        phone_number:"1234567",
    },
    {
        fullname: "Doğancan",
        phone_number:"5567417",
    },
    {
        fullname: "Demet",
        phone_number:"5482261",
    },
    ]);

    useEffect(()=>{
        console.log(contacts)
    }, [contacts])
    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts
