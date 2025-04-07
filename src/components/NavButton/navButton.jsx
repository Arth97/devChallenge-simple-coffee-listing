import React from 'react';
import './navButton.css';

const NavButton = ({ textButton, selected, onClick }) => {
  return (
    <div 
      className={`nav-button ${selected ? 'nav-button-selected' : ''}`} 
      onClick={onClick}
    >
      <p className="label">{textButton}</p>
    </div>
  );
};

export default NavButton;