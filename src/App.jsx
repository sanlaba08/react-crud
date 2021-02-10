import React, { useState } from 'react';
import TableUser from './components/TableUser';
import AddUser from './components/AddUser';
import DetailsUser from './components/DetailsUser';

const App = () => {

  const usersData = [];

  const [users, setUsers] = useState(usersData);

  const initialFormState = { id: null, username: '', name: '', lastname: '' };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target

      setUser({...user, [name]: value })
    };

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const [userSelect, setUserSelect] = useState([]);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setUserSelect('')
  };

  const showUser = (id) => {
    setUserSelect(users.filter((user) => user.id === id));
  };

  return (
    <div className="container">
      <h1>CRUD React</h1>
      <div className="create">
        <h2>Crear Usuarios</h2>
        <AddUser 
          addUser={addUser} 
          setUser={setUser} 
          usersData={usersData} 
          user={user} 
          handleInputChange={handleInputChange} 
          initialFormState={initialFormState} 
        />
      </div>
      <div className="listado">
        <h2>Listado de Usuarios</h2>
        <TableUser 
          users={users} 
          deleteUser={deleteUser} 
          showUser={showUser} 
        />
      </div>
      <div className="details">
        <h2>Detalles de Usuario</h2>
        <DetailsUser 
        userSelect={userSelect} 
        />
      </div>
    </div>
  );
};

export default App;
