import { useState } from 'react'
import './App.css'
import UseRef from './pages/UseRef'
import Counter from './pages/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <UseRef />
      <Counter/>
    </>
  )
}

export default App
