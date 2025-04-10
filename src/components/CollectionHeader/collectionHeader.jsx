import React from 'react';
import './collectionHeader.css';

const CollectionHeader = () => {
  return (
    <div className="headerSvg flex flex-col items-center gap-2 mb-5">
      <h1 className="heading">Our Collection</h1>
      <p className="description">
        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
      </p>
    </div>
  );
};

export default CollectionHeader;