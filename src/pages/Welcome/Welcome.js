import React from 'react'

import Title from '../../ui/Title';
import Input from '../../ui/Input';

import './Welcome.css';

import { getUsers } from '../../api/users'

const Welcome = ({ name, updateName, updateShowTodo }) => {

  const welcomeInput = React.useRef(null)

  const handleWelcomeSubmit = (e) => {
    e.preventDefault();

    if (name === '') {
      welcomeInput.current.focus()
     
      return
    }

    getUsers.then(dados => console.log(dados))

    updateShowTodo(true) 
    
  }

  return (
    <div className="presentation">
      <Title>
        Welcome to your Todo List!
      </Title>
      <p className="presentation__text">Let's start!</p>

      <form className="list__form" onSubmit={handleWelcomeSubmit}>
        <Input placeholder="What is your name?" targetRef={welcomeInput} value={name} onChange={(e) => updateName(e.target.value)}/>

        <button className="presentation__button"><i className="fas fa-play"/></button>

      </form>
    </div>
  )
}

export default Welcome
