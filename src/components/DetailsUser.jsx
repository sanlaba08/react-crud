import React from 'react';

const DetailsUser = ({ userSelect }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nombre de Usuario</th>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          {userSelect.length > 0 ? (
            userSelect.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No hay usuarios</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default DetailsUser;
