import './styles.css'

function App() {
  const message = 'This is my first variable rendered in JSX!'

  const handleClick = () => {
    alert('you clicked the message!')
  }

  return (
    <div>
      <img src="https://via.placeholder.com/150" alt="profile" />
      <div className='user-details'></div>
      <p>Name: Jenny Han</p>
      <p>Email: Jenny.Han@notreal.com</p>
      <p>Age: 25</p>
    </div>
  );
}

export default App;
