import { useState } from 'react';

let guestAsNumber;
export default function Form() {
    const [guest, setguest] = useState('1');
    guestAsNumber = Number(guest);
  return (
    <>
      <label>
        Number Of Guest:
        <input id="guest1"
          value={guest}
          onChange={e => setguest(e.target.value)}
          type="number"
        />
        <button onClick={handleClickCoffee}>
          Make Coffee!
        </button>
        <button onClick={handleClickTea}>
          Make Tea!
        </button>
      </label>
     
      {guestAsNumber > 0 &&
        <p>No of guest is {guestAsNumber}.</p>
      }
      <p id='receipe'></p>
    </>
  );
}
function handleClickCoffee() {
  let string = "Add "+guestAsNumber + " cup Milk + 1 cup Water "+guestAsNumber/2+" tsp Sugar + coffee"
    document.getElementById("receipe").innerHTML=string;
    // alert('You clicked me!');
      
  }
function handleClickTea() {
  let string = "Add "+guestAsNumber + " cup Milk + 1 cup Water "+guestAsNumber/2+" tsp Sugar + tea"
    document.getElementById("receipe").innerHTML=string;
    // alert('You clicked tea!');
      
  }


