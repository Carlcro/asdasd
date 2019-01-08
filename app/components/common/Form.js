import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './Input';
import Select from './Select';
import ColorPicker from './ColorPicker';

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
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data }; // eslint-disable-line react/no-access-state-in-setstate
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  handleColorPickerChange = ({ value }) => {
    // TODO: Event dont have name property for some reason so "color" has to be hard coded This needs to be fixed
    const errors = { ...this.state.errors }; // eslint-disable-line react/no-access-state-in-setstate
    // const errorMessage = this.validateProperty(input);
    // if (errorMessage) errors[input.name] = errorMessage;
    // else delete errors[input.name];

    const data = { ...this.state.data }; // eslint-disable-line react/no-access-state-in-setstate
    data.color = value;

    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button type="button" className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderColorPicker = (name, label) => {
    const { data } = this.state;

    return (
      <ColorPicker
        label={label}
        name={name}
        value={data[name]}
        onChange={this.handleColorPickerChange}
      />
    );
  };

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
