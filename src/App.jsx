import './App.css';
import CollectionHeader from './components/CollectionHeader/collectionHeader.jsx';
import NavButton from './components/NavButton/navButton.jsx';
import ProductCard from './components/ProductCard/productCard.jsx';

function App() {
  return (
    <div className="App">
      <div className="title-header"></div>
			<CollectionHeader></CollectionHeader>
      <div className="nav-products flex justify-around">
        <NavButton textButton="All Products" selected={true}></NavButton>
        <NavButton textButton="Avalible Now" selected={false}></NavButton>
      </div>
      <ProductCard></ProductCard>
    </div>
  );
}

export default App;

// TODO: Implementar las fuentes proporcionadas.
// TODO: En chip cambiar la fuente (tamaño texto) para que quepa.

