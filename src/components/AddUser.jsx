import React from 'react'

const AddUser = (props) => {

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!props.user.name || !props.user.username) return

        props.addUser(props.user)
        props.setUser(props.initialFormState)
      }}
    >
      <label>Nombre de Usuario</label>
      <input
        type="text"
        name="username"
        value={props.user.username}
        onChange={props.handleInputChange}
      />
      <label>Nombre</label>
      <input
        type="text"
        name="name"
        value={props.user.name}
        onChange={props.handleInputChange}
      />
      <label>Apellido</label>
      <input
        type="text"
        name="lastname"
        value={props.user.lastname}
        onChange={props.handleInputChange}
      />
      
      <button>Añadir usuario</button>
    </form>
  )
}

export default AddUser