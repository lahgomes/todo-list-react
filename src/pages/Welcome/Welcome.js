import React from 'react'

import Title from '../../ui/Title';
import Input from '../../ui/Input';

import './Welcome.css';

import connection from '../../api/config'

import { addUser, getUsers } from '../../api/users'

const Welcome = ({ user, updateUser, updateShowTodo }) => {
  const initialName = user.name
  const [name, setName] = React.useState(initialName)

  const welcomeInput = React.useRef(null)

  const handleWelcomeSubmit = (e) => {
    e.preventDefault();

    addUser(name).then(dados => {
      updateUser({
        ...dados
      })
    })

    updateShowTodo(true) 
    
    /* if (name === '') {
      welcomeInput.current.focus()
     
      return
    } */
    
  }

  return (
    <div className="presentation">
      <Title>
        Welcome to your Todo List!
      </Title>
      <p className="presentation__text">Let's start!</p>

      <form className="list__form" onSubmit={handleWelcomeSubmit}>
        <Input placeholder="What is your name?" targetRef={welcomeInput} value={user.name} onChange={(e) => setName(e.target.value)}/>

        <button className="presentation__button"><i className="fas fa-play"/></button>

      </form>
    </div>
  )
}

export default Welcome
