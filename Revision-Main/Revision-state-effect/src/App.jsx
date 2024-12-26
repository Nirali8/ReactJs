import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import State from './componant/State'
import Effect from './componant/Effect'
import ChangeTheme from './componant/ChangeTheme'
import Counter from './componant/Counter'
import MinuteCounter from './componant/MinuteCounter'
import Blog from './componant/Blog'
import Pagination from './componant/Pagination'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      {/* <State/> */}
      {/* <Effect/> */}
      {/* <Counter /> */}
      {/* <MinuteCounter/> */}
      {/* <ChangeTheme/> */}
      {/* <Blog/> */}
      <Pagination/>
    </>
  )
}

export default App
