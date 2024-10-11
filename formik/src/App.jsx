import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formik from './component/Formik'
import Formik1 from './component/Formik1'
import YupValidation from './component/YupValidation'
import FormikField from './component/FormikField'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      {/* <Formik/> */}
      {/* <Formik1 /> */}
      <YupValidation />
      {/* <FormikField/> */}
    </>
  )
}

export default App
