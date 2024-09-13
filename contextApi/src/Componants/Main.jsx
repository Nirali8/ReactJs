import React from 'react'
import Com_A from './Com_A'
import { createContext } from 'react'

/*contextapi dataProvider dataConsumer */

export const data = createContext()
export const data1 = createContext()
const Main = () => {
  return (
    //SINGLE DATA
    
    // <div>
    //   <data.Provider value={"Nirali"}>
    //     <Com_A />
    //   </data.Provider>
    // </div>

    
    //Multiple daTA

    <div>
      <data.Provider value={"Nirali"}>
        <data1.Provider value={20}>
          <Com_A />
        </data1.Provider>
      </data.Provider>
    </div>
  )
}

export default Main
