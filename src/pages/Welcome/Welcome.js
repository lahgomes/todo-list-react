import React from 'react'

const Welcome = ({ name, updateName, updateShowTodo }) => {

  const handleWelcomeSubmit = (e) => {
    e.preventDefault();
    updateShowTodo(true)
  }

  return (
    <div className="presentation">
      <h1 className="presentation__welcome">
        Welcome to your Todo List!
      </h1>
      <p className="presentation__text">Let's start!</p>
      <form onSubmit={handleWelcomeSubmit}>
        <input type="text" placeholder="What is your name?" value={name} onChange={(e) => updateName(e.target.value)}/>
        <button>Start</button>
      </form>
    </div>
  )
}

export default Welcome
