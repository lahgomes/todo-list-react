import React from 'react';

const Todo = ({ name }) => {
  const [item, setItem] = React.useState('');
  const [items, setItems] = React.useState([]);

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
  )
}

export default Todo
