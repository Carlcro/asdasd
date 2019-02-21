import React from 'react';
import { Input as RbxInput } from 'rbx';

const Input = ({ name, label, error, ...rest }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <RbxInput {...rest} name={name} id={name} />
    {error && <div style={{ color: 'red' }}>{error}</div>}
  </div>
);

export default Input;
