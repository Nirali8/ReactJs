import React from 'react'
import { useState } from 'react';

const StateWithArray = () => {

      const [items, setItems] = useState([]);

      const addItem = () => {
        // Generate a random number to add to the array
        const newItem = Math.floor(Math.random() * 100) + 1;

        // Update state with a new array (do not mutate the original array)
        setItems([...items, newItem]);
      };

      const removeItem = (indexToRemove) => {
        // Create a new array with the item at indexToRemove filtered out
        setItems(items.filter((item, index) => index !== indexToRemove));
      };


  return (
    <div>
      <h1 className="text-7xl text-red-700 border-double border-4 border-black m-6">
        Array State Example
      </h1>
      <button onClick={addItem} className='bg-teal-700 p-2 rounded-lg m-2 text-4xl'>Add Item To Array</button>

      <ul>
        {items.map((item, index) => (
          <li key={index} className='text-2xl'>
            {item}<button onClick={() => removeItem(index)} className='bg-green-700 m-3 p-2 rounded-md'>Remove Item</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StateWithArray
