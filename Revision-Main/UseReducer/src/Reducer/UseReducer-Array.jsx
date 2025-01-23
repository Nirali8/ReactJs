import React from 'react'
import { useReducer } from 'react'


//syntax
//const [state,dispatch]=useReducer(reducer,intialstate)

const initialState = [{ cake: 10, choco: 150 }];

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENTCAKE":
      return [{ ...state[0], cake: state[0].cake + 1 }];
    case "DECREMENTCAKE":
      return [{ ...state[0], cake: state[0].cake - 1 }];
    case "INCREMENTCHOCO":
      return [{ ...state[0], choco: state[0].choco + 1 }];
    case "DECREMENTCHOCO":
      return [{ ...state[0], choco: state[0].choco - 1 }];
    default:
      return state;
  }
};


const UseReducerArray = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1 className='text-center bg-yellow-300 text-3xl'>This is USe REducer Hook</h1>
      <div>{state[0].cake}</div>
      <div>{state[0].choco}</div>
      <button className='bg-slate-700 text-yellow-600 text-5xl rounded-3xl p-2 m-2' onClick={()=>{dispatch({type:"INCREMENTCAKE"})}}>+Cake</button>
      <button className='bg-slate-700 text-yellow-600 text-5xl rounded-3xl p-2 px-3 m-2' onClick={()=>{dispatch({type:"DECREMENTCAKE"})}}>-Cake</button>
      <button className='bg-slate-700 text-yellow-600 text-5xl rounded-3xl p-2 m-2' onClick={()=>{dispatch({type:"INCREMENTCHOCO"})}}>+Choco</button>
      <button className='bg-slate-700 text-yellow-600 text-5xl rounded-3xl p-2 px-3 m-2' onClick={()=>{dispatch({type:"DECREMENTCHOCO"})}}>-Choco</button>
    </div>
  )
}

export default UseReducerArray

