import React from 'react'
import { memo } from 'react'

const UseCallBack = ({ add }) => {
      console.log("ChildComponents Re-render UseCallBack");

  return (
    <div>
      <button onClick={add}>Click to Add</button>
    </div>
  )
}

export default memo(UseCallBack)
