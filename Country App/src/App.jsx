import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Country from './component/Country'
import SelectCountry from './component/SelectCountry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      {/* <Country/>   */}
      <SelectCountry/>
    </>
  )
}

export default App
