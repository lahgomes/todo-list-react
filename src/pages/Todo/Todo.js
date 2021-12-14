import React from 'react';
import Title from '../../ui/Title';
import Input from '../../ui/Input';
import Item from '../../components/Item';
import Error from '../../components/Error';
import { getItems, addItem, deleteItem } from '../../api/items';

const Todo = ({ user }) => {
  const [item, setItem] = React.useState('');
  const [items, setItems] = React.useState([]);
  const [messageError, setMessageError] = React.useState(false);

  React.useEffect(() => {
   getItems(user.id).then((dados)=> {
     if(dados) setItems([...items, ...dados])
   })

  }, [])
  

  const handleTodoSubmit = async (e) => {
    e.preventDefault();

    if (item === '') {
      setMessageError(true)
      return      
    }

    const newItems = [...items]  
    const newItem = await addItem(user.id, { content: item });
    newItems.push(newItem)

    setItems(newItems)
    setItem('')
    setMessageError(false)
  }

  const handleDelete = (id) => {
    const newItems = [...items]

    deleteItem(id).then(() => {    
      const index = newItems.findIndex(newItem => newItem.id === id)
      newItems.splice(index, 1)

      setItems(newItems)

    })
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
          items.map((item) => (
           <Item 
            key={item.id}
            index={item.id}
            item={item.content}          
            handleDelete={handleDelete}
           />
          ))
        }
      </ul>    

    </div>
  )
}

export default Todo
