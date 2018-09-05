import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const Input = ({icon, input, width, type, placeholder, meta: {touched, error}}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && <Label pointing color='red'>{error}</Label>}
    </Form.Field>
  )
};

export default Input;