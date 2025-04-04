import { useEffect, useState } from 'react';
import './App.css';
import CollectionHeader from './components/CollectionHeader/collectionHeader.jsx';
import NavButton from './components/NavButton/navButton.jsx';
import ProductCard from './components/ProductCard/productCard.jsx';

function App() {

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data)
        setProductData(data);
      })
      .catch((error) => {
        console.log("error", error)
      });
  }, []);

  return (
    <div className="App">
			<CollectionHeader />
      <div className="nav-products flex justify-around mb-10">
        <NavButton textButton="All Products" selected={true} />
        <NavButton textButton="Avalible Now" selected={false} />
      </div>
      <div className="grid grid-cols-2 gap-7">
      {
        productData.map(product => (
          <ProductCard product={product} key={product.id} />
        ))
      }
      </div>
    </div>
  );
}

export default App;

// TODO: En chip cambiar la fuente (tamaño texto) para que quepa.
// TODO: Corregir spacing en navButtons
