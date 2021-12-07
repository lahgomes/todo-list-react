import React from 'react';
import './Input.css';

const Input = ({ type = 'text', value, placeholder, onChange, targetRef}) => {
  return (
    <input className="list__input" ref={targetRef} type={type} value={value} placeholder={placeholder} onChange={onChange} />
  )
}

export default Input
