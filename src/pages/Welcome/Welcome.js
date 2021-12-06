import React from 'react'
import Title from '../../ui/Title';
import Input from '../../ui/Input';
import './Welcome.css';

const Welcome = ({ name, updateName, updateShowTodo }) => {

  const handleWelcomeSubmit = (e) => {
    e.preventDefault();
    updateShowTodo(true)
  }

  return (
    <div className="presentation">
      <Title>
        Welcome to your Todo List!
      </Title>
      <p className="presentation__text">Let's start!</p>
      <form className="list__form" onSubmit={handleWelcomeSubmit}>
        <Input placeholder="What is your name?" value={name} onChange={(e) => updateName(e.target.value)}/>
        <button className="presentation__button"><i class="fas fa-play"/></button>
      </form>
    </div>
  )
}

export default Welcome
