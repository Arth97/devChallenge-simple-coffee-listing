import React from 'react';
import './availabilityButtons.css';
import NavButton from '../NavButton/navButton.jsx';

const AvailabilityButtons = ({showOnlyAvailableCoffee, onSelectionChanges }) => {
  return (
    <div className="nav-products flex gap-4 mb-10">
      <div onClick={() => onSelectionChanges()}>
        <NavButton textButton="All Products" selected={!showOnlyAvailableCoffee} />
      </div>
      <div onClick={() => onSelectionChanges()}>
        <NavButton textButton="Available Now" selected={showOnlyAvailableCoffee} />
      </div>
    </div>
  );
};

export default AvailabilityButtons;