import React from 'react';
import './productCard.css';
import Chip from './Chip/chip.jsx';

const ProductCard = (props) => {
	return (
		<div className="card">

			<Chip></Chip>
			<p>{}</p>
		</div>
	);
};

export default ProductCard;