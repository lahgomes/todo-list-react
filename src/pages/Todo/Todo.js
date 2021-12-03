import React from 'react';
import Title from '../../ui/Title';
import Input from '../../ui/Input';

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
 

  return (
    <div className="list hidden">
      <Title className="list__title">
        {name}'s Todo List
      </Title>
              
      <form className="list__form" onSubmit={handleTodoSubmit}>
        <Input placeholder="Add your new task here" value={item} onChange={(e) => setItem(e.target.value)}/>
        <button className="list__button">Add
          <i className="fas fa-plus"></i>
        </button>
      </form>

      <ul className="list__items">
        {
          items.map((item, index) => (
            
          ))
        }
      </ul>
    </div>
  )
}

export default Todo
