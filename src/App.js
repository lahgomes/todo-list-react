import React from 'react';
import './App.css';

function App() {
  const [name, setName] = React.useState('');
  const [showTodo, setShowTodo] = React.useState(false);

  const [item, setItem] = React.useState('');
  const [items, setItems] = React.useState([]);

  const handleWelcomeSubmit = (e) => {
    e.preventDefault();
    setShowTodo(true)
  }
  
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (item === '') {
      return      
    }

    const newItems = [...items]
    newItems.push(item)

    setItems(newItems)
    setItem('')
  }

  const handleDelete = (index) => {
    const newItems = [...items]
    newItems.splice(index, 1)

    setItems(newItems)
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
        <div className="list hidden">
          <h1 className="list__title">
            {name}'s Todo List
          </h1>
                   
          <form className="list__form" onSubmit={handleTodoSubmit}>
            <input className="list__input" type="text" placeholder="Add your new task here" value={item} onChange={(e) => setItem(e.target.value)}/>
            <button className="list__button">Add
              <i className="fas fa-plus"></i>
            </button>
          </form>

          <ul className="list__items">
            {
              items.map((item, index) => (
                <li key={index}>
                  <input type="checkbox" id={`item-${index}`}/>
                  <label htmlFor={`item-${index}`}>
                  {item}
                  </label>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
              ))
            }
          </ul>
        </div>
      }       
    </>
  );
}

export default App;
