import React from 'react';
import './Input.css';

const Input = ({ type = 'text', value, placeholder, onChange}) => {
  return (
    <input className = "list__input" type={type} value={value} placeholder={placeholder} onChange={onChange} />
  )
}

export default Input
