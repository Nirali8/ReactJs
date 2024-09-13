import React from 'react'
import { data } from './Main'
import { data1 } from './Main'

//single data
// const Com_D = (props) => {
//   return (
//     <div>
//       {
//         <data.Consumer>
//           {
//             (value) => {
//               return (
//                 <>
//                   <h1 className='heading'>
//                     This is Component D {value}
//                   </h1>
//                 </>
//               )
//             }
//           }
//         </data.Consumer>
//       }
//     </div>
//   )
// }

//Multiple data

const Com_D = () => {
  return (
    <div>
      {
        <data.Consumer>
          {
            (value) => {
              return (
                <>
                {
                  <data1.Consumer>
                  {
                    (age) => {
                      return(
                      <>
                        <h1 className='heading'>
                          This is Component D {value} {age}
                        </h1>
                      </>
                      )
                    }
                  }
                </data1.Consumer>
                }
                </>
              )
            }
          }
        </data.Consumer>
      }
    </div>
  )
}

export default Com_D
