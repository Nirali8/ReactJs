import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetRequest from './axios/GetRequest'
import PostRequest from './axios/PostRequest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <h1>This is App Component</h1>
      <GetRequest />
      <PostRequest/>
    </>
  )
}

export default App
