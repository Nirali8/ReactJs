import { useState } from 'react'
import './App.css'

function App() {
  const intialState = [{value:20},{data:40}]
  const [state, setState] = useState(intialState)
  
  // const incrementValue = () => {
  //   const data = state;
  //   data[0].value++;
  //   setState(
  //     state.map((item, index) => (index === 0 ? { ...item, value: data[0].value } : item))
  //   );
  // }

  const incrementValue = () => {
    setState(
      (prevData) => {
        const data = [...prevData];
        data[0] = { ...data[0], value: data[0].value + 1 }
        return data
    }
    );
  };

    const decrementValue = () => {
      setState((prevData) => {
        const data = [...prevData];
        data[0] = { ...data[0], value: data[0].value - 1 };
        return data;
      });
    };

    // const incrementValue = () => {
    //   // data[0].value++;
    //   setState((prevData) => {
    //     const data = [...prevData];
    //     data[0] = { ...data[0], value: data[0].value + 1 };
    //     return data;
    //     // data.map((item, index) =>
    //     //   index === 0 ? { ...item, value: data[0].value + 1 } : item
    //     // )
    //   });
    // };

  // const decrementValue = () => {
  //   const data = state;
  //   data[0].value--;
  //   setState(
  //     state.map((item, index) => (index === 0 ? { ...item, value: data[0].value } : item))
  //   );
  // }
  const incrementData = () => {
    const data1 = state;
    data1[1].data++;
    setState(
      state.map((item, index) => (index === 1 ? { ...item, data: data1[1].data } : item))
    );
  }
  const decrementData = () => {
    const data1 = state;
    data1[1].data--;
    setState(
      state.map((item, index) => (index === 1 ? { ...item, data: data1[1].data } : item))
    );
  }
  return (
    <>  
      <h1>This is App Component</h1>
     
      <h1>Value : {state[0].value}</h1>
      <h1>Data : {state[1].data}</h1>
      <button onClick={incrementValue}>Click to Increment Value</button>
      <button onClick={decrementValue}>Click to Decrement Value</button>
      <br />
      <button onClick={incrementData}>Click to Increment Data</button>
      <button onClick={decrementData}>Click to Decrement Data</button>
    </>
  )
}

export default App
