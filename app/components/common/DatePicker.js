import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker as KendoDatePicker } from '@progress/kendo-react-dateinputs';

const DatePicker = ({ enabled, value, onChange, name, className }) => (
  <div className={className}>
    <KendoDatePicker
      format="dd/MM/yy"
      disabled={!enabled}
      value={value}
      onChange={onChange}
      name={name}
    />
  </div>
);

DatePicker.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  enabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date).isRequired,
};
DatePicker.defaultProps = {
  enabled: true,
};

export default DatePicker;
