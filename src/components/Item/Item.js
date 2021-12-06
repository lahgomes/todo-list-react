import React from 'react';
import './Item.css';

const Item = ({ item, items, index, setItems }) => {

  const handleDelete = (index) => {
    const newItems = [...items]
    newItems.splice(index, 1)

    setItems(newItems)
  }

  return (
  <li className="list__item">
    <input className="list__checkbox" type="checkbox" id={`item-${index}`}/>
    <label htmlFor={`item-${index}`}>
    {item}
    </label>
    <button className="list__delete" onClick={() => handleDelete(index)}><i class="far fa-trash-alt"></i></button>
  </li>

  )

}

export default Item
