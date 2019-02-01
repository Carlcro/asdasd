import React from 'react';

const NavItem = props => {
  return (
    <span onClick={e => props.onClick(e)}>
      <i style={props.style} id={props.id} className={props.className} />
    </span>
  );
};

export default NavItem;

//"fas fa-sort-down fa-lg"
