import React from 'react';
import Title from '../../ui/Title';
import Input from '../../ui/Input';
import Item from '../../components/Item';
import Error from '../../components/Error';

const Todo = ({ user }) => {
  const [item, setItem] = React.useState('');
  const [items, setItems] = React.useState([]);
  const [messageError, setMessageError] = React.useState(false);
  

  const handleTodoSubmit = (e) => {
    e.preventDefault();

    if (item === '') {
      setMessageError(true)
      return      
    }

    const newItems = [...items]
    newItems.push(item)

    setItems(newItems)
    setItem('')
    setMessageError(false)
  }
 

  return (
    <div className="list">
      <Title className="list__title">
        {user.name}'s Todo List
      </Title>
              
      <form className="list__form" onSubmit={handleTodoSubmit}>
        <Input placeholder="Add your new task here" value={item} onChange={(e) => setItem(e.target.value)}/>

        <button className="list__button">
          <i className="fas fa-plus"/>
        </button>
        
      </form>

      {messageError && 
      <Error message='You forgot to add your task!'/>}

      <ul className="list__items">
        {
          items.map((item, index) => (
           <Item 
            key={index}
            item={item} 
            items={items} 
            setItems={setItems} 
            index={index}
           />
          ))
        }
      </ul>    

    </div>
  )
}

export default Todo
