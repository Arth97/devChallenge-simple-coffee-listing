import React from 'react';
import './coffeeCard.css';
import Chip from './Chip/chip.jsx';

const CoffeeCard = ({coffee}) => {
	return (
		<div className="card">
			<img className="rounded-xl" src={coffee.image} alt={coffee.name} />
			<Chip></Chip>
			<div className="info-coffee">
				<div className="flex justify-between items-center">
						<p style={{color: "#FEF7EE"}}>{coffee.name}</p>
					<span className="price price-text">{coffee.price}</span>
				</div>
				<div className="flex justify-between">
					<span className="flex items-center">
							<img 
								src={coffee.rating > 0 ? "Star_fill.svg" : "Star.svg"} 
								alt="Star" 
								width="25" 
								height="25" 
							/>
						<span className="label" style={{color: "#FEF7EE"}}>{coffee.rating}
							{
								coffee.rating > 0 ? 
								<span className="label" style={{color: "#6F757C"}}> ({coffee.votes} votes) </span>
								: <span className="label" style={{color: "#6F757C"}}>No Ratings</span>								
							}
						</span>
					</span>
					{!coffee.available && <span style={{color: "#ED735D"}}>Sold out</span>}
				</div>
			</div>
		</div>
	);
};

export default CoffeeCard;