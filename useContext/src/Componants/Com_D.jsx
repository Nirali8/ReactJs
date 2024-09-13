import React from 'react'
import { data } from './Main'
import { data1 } from './Main'
import { useContext } from 'react'

const Com_D = (props) => {
  const name = useContext(data)
  const age = useContext(data1)
  return (
    //single data


    // <div>
    //   <h1>
    //   <h1 className='heading'>This is Component D {name}</h1>
    //   </h1>
    // </div>


    //Multi data


    <div>
      <h1>
        <h1 className='heading'>This is Component D {name} {age}</h1>
      </h1>
    </div>
  )
}

export default Com_D
