import React from 'react'; //biblioteca externa

import Todo from './pages/Todo'; //nossos componentes

import './App.css'; //nosso css

function App() {
  const [name, setName] = React.useState('');
  const [showTodo, setShowTodo] = React.useState(false);

  const handleWelcomeSubmit = (e) => {
    e.preventDefault();
    setShowTodo(true)
  }
    
  return (
    <>      
      {
        !showTodo && 
        <div className="presentation">
          <h1 className="presentation__welcome">
            Welcome to your Todo List!
          </h1>
          <p className="presentation__text">Let's start!</p>
          <form onSubmit={handleWelcomeSubmit}>
            <input type="text" placeholder="What is your name?" value={name} onChange={(e) => setName(e.target.value)} />
            <button>Start</button>
          </form>
        </div>
      }

      {
        showTodo && 
        <Todo name = {name} />
      }       
    </>
  );
}

export default App;
