import ContactCard from './ContactCard';
import contacts from './data'
import './styles.css'

function App() {
return (
  <>
    {contacts.map(contact => (
      <ContactCard
        avatar="https://via.placeholder.com/150"
        name={contact.name}
        email={contact.email}
        age={contact.age}
      />
    ))}
  </>
  );
}

export default App;
