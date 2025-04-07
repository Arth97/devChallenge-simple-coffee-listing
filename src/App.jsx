import './App.css';
import CollectionHeader from './components/CollectionHeader/collectionHeader.jsx';
import CoffeeList from './components/CoffeeList/coffeeList.jsx';
import AvailabilityButtons from './components/AvailabilityButtons/availabilityButtons.jsx';
import { useState } from 'react';

function App() {
	const [showOnlyAvailableCoffee, setShowOnlyAvailableCoffee] = useState(false);

	const onSelectionChanges = () => {
		setShowOnlyAvailableCoffee(!showOnlyAvailableCoffee);
	}

	return (
		<div className="App">
			<CollectionHeader />
			<AvailabilityButtons showOnlyAvailableCoffee={showOnlyAvailableCoffee} onSelectionChanges={onSelectionChanges} />
			<CoffeeList showOnlyAvailableCoffee={showOnlyAvailableCoffee} />
		</div>
	);
}

export default App;
