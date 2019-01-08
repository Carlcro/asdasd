import React from 'react';
import { ColorPicker as KendoColorPicker } from '@progress/kendo-inputs-react-wrapper';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import kendo from '@progress/kendo-ui';

const ColorPicker = ({ name, label, className, onChange, value }) => (
  <React.Fragment>
    {label && (
      <label htmlFor={name} className="colorpicker-label">
        {label}
      </label>
    )}
    <KendoColorPicker
      name={name}
      value={value}
      className={className}
      change={onChange}
    />
  </React.Fragment>
);

ColorPicker.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default ColorPicker;
