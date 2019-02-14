/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';

const NavItem = props => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <span onClick={e => props.onClick(e)} role="link">
    <i style={props.style} id={props.id} className={props.className} />
  </span>
);

NavItem.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default NavItem;

// "fas fa-sort-down fa-lg"
