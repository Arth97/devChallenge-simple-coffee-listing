import React from 'react';
import './productCard.css';
import Chip from './Chip/chip.jsx';

const ProductCard = ({product}) => {
	return (
		<div className="card">
			<img className="rounded-xl" src={product.image} alt={product.name} />
			<Chip></Chip>
			<div className="info-product">
				<div className="flex justify-between">
					<span>{product.name}</span>
					<span>{product.price}</span>
				</div>
				<div className="flex justify-between">
					<span>{product.rating}</span> {/* TODO: Añadir votaciones */}
					<span>{product.avalible}TODO mostrar avalible status</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;