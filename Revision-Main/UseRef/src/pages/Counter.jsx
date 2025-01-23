import React from 'react'
import { useRef,useState,useEffect } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    const [isRun, setIsRun] = useState(false)
    const handleCountRef = useRef()

    useEffect(() => {
        if(isRun){
            handleCountRef.current = setInterval(() => {
                setCount((count) => count + 1)
            } , 1000)
        }
        else{
            clearInterval(handleCountRef.current)
        }

        return () => clearInterval(handleCountRef.current)
    }, [isRun])
    
     const handleStart = () => {
        setIsRun(true)
    }
    const handlePause = () => {
        setIsRun(false)
    }
    const handleReset = () => {
        setIsRun(false)
        setCount(0)
    }
    const handleStop = () =>
    {
        clearInterval(handleCountRef.current)
    }

    
  return (
    <div>
          <h1>{count}</h1>
          <button className='bg-amber-500 p-2 m-4 rounded-full' onClick={handleStart}>Start Count</button>
          <button className='bg-amber-500 p-2 m-4 rounded-full' onClick={handlePause}>Pause Count</button>
          <button className='bg-amber-500 p-2 m-4 rounded-full' onClick={handleStop}>Stop Count</button>
          <button className='bg-amber-500 p-2 m-4 rounded-full' onClick={handleReset}>Reset Count</button>
    </div>
  )
}

export default Counter
