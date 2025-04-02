import React from 'react';
import './navButton.css';

const NavButton = ({textButton, selected}) => {
  return (
    <div className={`nav-button ${selected ? 'nav-button-selected' : ''}`}>
      <p>{textButton}</p>
    </div>
  );
};

export default NavButton;