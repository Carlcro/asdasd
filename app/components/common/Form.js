import React, { Component } from 'react';
import Joi from 'joi-browser';
import { Button } from 'rbx';
import Input from './Input';
import Select from './Select';

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (const item of error.details) errors[item.path[0]] = item.message; // eslint-disable-line no-restricted-syntax
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors }; // eslint-disable-line react/no-access-state-in-setstate

    const data = { ...this.state.data }; // eslint-disable-line react/no-access-state-in-setstate
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  handleColorPickerChange = ({ value }) => {
    const errors = { ...this.state.errors }; // eslint-disable-line react/no-access-state-in-setstate

    const data = { ...this.state.data }; // eslint-disable-line react/no-access-state-in-setstate
    data.color = value;

    this.setState({ data, errors });
  };

  renderButton(label, type = 'button', color = 'primary') {
    return (
      <Button style={{ marginTop: 20 }} type={type} color={color} fullwidth>
        {label}
      </Button>
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInput(name, label, type = 'text') {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
