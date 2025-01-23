import React,{useRef} from 'react'

const UseRef = () => {

    const headingRef = useRef()
    const divRef = useRef()
     const handlestyle = () => {
       headingRef.current.style.backgroundColor = "gray";
       divRef.current.style.backgroundColor = "green";
       divRef.current.style.height = "100px";
       divRef.current.style.width = "100px";
     };

  return (
    <div>
          <h1 ref={headingRef} className='bg-red-600 p-3 m-4'>This Is Useref DEmo</h1>
          <div ref={divRef}></div>
          <button onClick={handlestyle} className='bg-red-300 p-3 m-4 rounded-full'>Click Me</button>
    </div>
  )
}

export default UseRef
