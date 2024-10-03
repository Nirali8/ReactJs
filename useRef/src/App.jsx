import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseRef from './Hook/UseRef'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <UseRef/>
    </>
  )
}

export default App
