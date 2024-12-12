import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import State from './componant/State'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <State/>
    </>
  )
}

export default App
