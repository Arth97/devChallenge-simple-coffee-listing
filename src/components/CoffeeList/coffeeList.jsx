import React from 'react';
import './coffeeList.css';

import { useEffect, useState } from 'react';
import CoffeeCard from './CoffeeCard/coffeeCard.jsx';

const CoffeeList = () => {

  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data)
        setCoffeeData(data);
      })
      .catch((error) => {
        console.log("error", error)
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-7">
      {
        coffeeData.map(coffee => (
          <CoffeeCard coffee={coffee} key={coffee.id} />
        ))
      }
    </div>
  );
};

export default CoffeeList;