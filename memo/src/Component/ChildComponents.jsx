import React from 'react'
import { memo } from 'react';

const ChildComponents = ({ add }) => {
  console.log("ChildComponents Re-render");
  return (
    <div>
      <button onClick={add}>Add</button>
    </div>
  );
};

export default memo(ChildComponents)
