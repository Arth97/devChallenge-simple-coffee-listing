import React from 'react';
import './productCard.css';
import Chip from './Chip/chip.jsx';

const ProductCard = (props) => {
	return (
		<div className="flex w-[260px] h-[240px] bg-white rounded-[20px]">

			<Chip></Chip>
			<p>{}</p>
		</div>
	);
};

export default ProductCard;