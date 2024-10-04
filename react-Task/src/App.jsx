import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListRenderingArray from './Component/ListRenderingArray'
import NestedComponent from './Component/NestedComponent'
import FormComponent from './Component/FormComponent'
import FormComponentMulti from './Component/FormComponentMulti'
import MultipleState from './Component/MultipleState'
import StateWithArray from './Component/StateWithArray'
import StateWithObject from './Component/StateWithObject'
import ToggleExample from './Component/ToggleExample'
import Counter from './Component/Counter'
import Timer from './Component/Timer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      {/* <ListRenderingArray/> */}
      {/* <NestedComponent/> */}
      {/* <FormComponent/> */}
      {/* <FormComponentMulti /> */}
      {/* <MultipleState/> */}
      {/* <StateWithArray /> */}
      {/* <StateWithObject/> */}
      {/* <ToggleExample /> */}
      <Counter />
      {/* <Timer/> */}
    </>
  )
}

export default App
