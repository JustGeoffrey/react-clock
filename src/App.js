import { useState } from 'react';
import './App.css';

import Form from './components/Form';

function App() {

  const updateTime = () => {
    setInterval(() => {
      let date = new Date()
      let d = date.toLocaleTimeString()
      let h = date.getHours()
      h > 11 ? setHours("PM") : setHours("AM")
      setTime(d)
    }, 1000)
  }
  const [hours, setHours] = useState(new Date().toLocaleTimeString())

  const [time, setTime] = useState(updateTime)

  const [users, setUsers] = useState([])

  const handleAddUser = (name, email, age) => {
    let userObj = {
      name: name,
      email: email, 
      age: age
    }
    console.log(userObj)
    setUsers([...users, userObj])
  }

  return (
    <div className="App">
      <div className='clock'>
        The current time is &nbsp; {time} {hours}
      </div>

      <Form 
        handleAddUser={handleAddUser}
      />
      {users.map((user, index) => {
        return (
          <div className='user' key={index}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
