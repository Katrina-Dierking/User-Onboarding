import React, {useState} from 'react';
// import {withFormik} from 'formik';
import UserForm from './components/UserForm';
import UserData from './components/UserData';


function App() {
  const [users, setUsers] = useState(UserData);

  const addNewUser = user => {
    setUsers([...users, user])
  }

  return (

    <div>
      <div className ="UserSection">
      <h1>Katrina's Team Members</h1>
      <UserData userData ={users} />
      </div>

      <div className ="formSection">
      <UserForm addNewUser={addNewUser} />
      </div>
    </div>
  );
}


  

export default App;
