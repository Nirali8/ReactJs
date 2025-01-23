import React from 'react'
import { useReducer } from 'react'


//syntax
//const [state,dispatch]=useReducer(reducer,intialstate)
const reducer = (state,action) => {
  switch (action.type) {
    case "INCREMENT":
      return state+1;
    case "DECREMENT":
      return state-1;
    default:
      return state;
  }
}


const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <h1 className='text-center bg-yellow-300 text-3xl'>This is USe REducer Hook</h1>
      <div>{state}</div>
      <button className='bg-slate-700 text-yellow-600 text-5xl rounded-3xl p-2 m-2' onClick={()=>{dispatch({type:"INCREMENT"})}}>+</button>
      <button className='bg-slate-700 text-yellow-600 text-5xl rounded-3xl p-2 px-3 m-2' onClick={()=>{dispatch({type:"DECREMENT"})}}>-</button>
    </div>
  )
}

export default UseReducer
