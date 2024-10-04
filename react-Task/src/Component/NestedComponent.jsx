import React from 'react'
import Conditionalifelse from "./Conditionalifelse";
import Conditionalswitch from './Conditionalswitch';
import Conditionallogical from "./Conditionallogical"
import Conditionalternary from "./Conditionalternary"
const NestedComponent = () => {
  return (
    <div>
          <Conditionalifelse />
          <Conditionalswitch />
          <Conditionallogical />
          <Conditionalternary/>
    </div>
  );
}

export default NestedComponent
