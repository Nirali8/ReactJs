import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Memo from './Hook/Memo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Memo/>
    </>
  )
}

export default App
