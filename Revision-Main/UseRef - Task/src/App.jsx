import { useState } from 'react'
import './App.css'
import Counter from './pages/Counter'
import FocusInput from './pages/FocusInput'
import ScrollImage from './pages/ScrollImage'
import VideoPlayer from './pages/VideoPlayer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      {/* <FocusInput /> */}
      <ScrollImage />
      {/* <VideoPlayer/> */}
      {/* <Counter /> */}
      
    </>
  )
}

export default App
