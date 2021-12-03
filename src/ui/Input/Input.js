import React from 'react';

const Input = ({ type = 'text', value, placeholder, onChange}) => {
  return (
    <input type={type} value={value} placeholder={placeholder} onChange={onChange} />
  )
}

export default Input
