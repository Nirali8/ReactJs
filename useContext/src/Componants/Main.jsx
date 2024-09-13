import React from 'react'
import Com_A from './Com_A'
import { createContext } from 'react'

/*usecontext */

export const data = createContext()
export const data1 = createContext()
const Main = () => {
  return (   
    // single data 
    // <div>
    //   {/* single data*/}
    //   <data.Provider value={"Nirali"}>
    //     <Com_A />
    //   </data.Provider>
    // </div>

    //Multiple data
    <div>
      {/* Multi data*/}
      <data.Provider value={"Nirali"}>
        <data1.Provider value={30}>
        <Com_A />
        </data1.Provider>
      </data.Provider>
    </div>
  )
}

export default Main
