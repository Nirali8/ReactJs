import { useState } from 'react'
import './App.css'
import SendStatus from './componant/task2/SendStatus'
import Fetch from './componant/task1/Fetch'
import List from './componant/task3/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Fetch/>
      {/* <SendStatus/> */}
      {/* <List/> */}
    </>
  )
}

export default App
