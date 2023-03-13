import { useState, useEffect } from 'react';
import ContactCard from './ContactCard';
import './styles.css'

function App() {
  const [contacts, setContacts] = useState([])

  
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then(response => response.json())
        .then(data => {
          console.log(data)
          setContacts(data.results)
    });
    
  }, [])
  
return (
  <>
    {contacts.map(contact => (
      <ContactCard
        key={contact.id.value}
        avatar={contact.picture.large}
        name={contact.name.first + ' ' + contact.name.last}
        email={contact.email}
        age={contact.dob.age}
      />
    ))}
  </>
  );
}

export default App;
