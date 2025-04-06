import './App.css';
import CollectionHeader from './components/CollectionHeader/collectionHeader.jsx';
import NavButton from './components/NavButton/navButton.jsx';
import CoffeeList from './components/CoffeeList/coffeeList.jsx';

function App() {
  return (
    <div className="App">
			<CollectionHeader />
      <div className="nav-products flex gap-4 mb-10">
        <NavButton textButton="All Products" selected={true} />
        <NavButton textButton="Avalible Now" selected={false} />
      </div>
			<CoffeeList />
    </div>
  );
}

export default App;

// TODO: En chip cambiar la fuente (tamaño texto) para que quepa.
// TODO: Corregir spacing en navButtons
