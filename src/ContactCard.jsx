import { useState } from 'react'

const ContactCard = () => {
  const [showAge, setShowAge] = useState(false)


  return (
    <div className='contact-card'>
      <img src="https://via.placeholder.com/150" alt="profile" />
      <div className='user-details'></div>
      <p>Name: Jenny Han</p>
      <p>Email: Jenny.Han@notreal.com</p>
      {showAge && <p>Age: 25</p>}
  </div>
  )
}

export default ContactCard