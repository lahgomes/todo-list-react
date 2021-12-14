import React from 'react';
import './Item.css';

const Item = ({ item, index, handleDelete}) => {

  return (
  <li className="list__item">
    <input className="list__checkbox" type="checkbox" id={`item-${index}`}/>
    <label htmlFor={`item-${index}`}>
    {item}
    </label>
    <button className="list__delete" onClick={() => handleDelete(index)}><i className="far fa-trash-alt"></i></button>
  </li>

  )

}

export default Item
