import React from 'react'

const Item = ({ item }) => {

  const handleDelete = (index) => {
    const newItems = [...items]
    newItems.splice(index, 1)

    setItems(newItems)
  }

  return (
  <li>
    <input type="checkbox" id={`item-${index}`}/>
    <label htmlFor={`item-${index}`}>
    {item}
    </label>
    <button onClick={() => handleDelete(index)}>Delete</button>
  </li>

  )

}


export default Item
