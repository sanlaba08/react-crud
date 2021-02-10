import React from 'react';

const TableUser = (props) => (
  <table>
    <thead>
      <tr>
        <th>Nombre de Usuario</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>
              <button onClick={() => props.showUser(user.id)} className="button muted-button">
                Detalles
              </button>
              <button onClick={() => props.deleteUser(user.id)} className="button muted-button">
                Eliminar
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No hay usuarios</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default TableUser;
