import { useState } from 'react'
import './App.css'
import UseReducer from './Reducer/UseReducer'
import UseReducerObj from './Reducer/UseReducer-obj'
import UseReducerArray from './Reducer/UseReducer-Array'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <UseReducer />
      <UseReducerObj />
      <UseReducerArray/>
    </>
  )
}

export default App
