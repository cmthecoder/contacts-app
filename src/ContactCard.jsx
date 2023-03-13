import { useState } from 'react'

const ContactCard = ({avatar, name, email, age}) => {
  const [showAge, setShowAge] = useState(false)


  return (
    <div className='contact-card'>
      <img src={avatar} alt="profile" />
      <div className='user-details'>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        {showAge && <p>Age: {age}</p>}
        <button onClick={() => setShowAge(!showAge)}>Toggle Age</button>
      </div>
  </div>
  )
}

export default ContactCard