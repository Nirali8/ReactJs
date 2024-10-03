import React, { useCallback } from 'react'
import { useState } from 'react';
import ChildComponents from '../Component/ChildComponents';
import UseCallBack from '../Component/UseCallBack';
import UseMemoDemo from '../Component/UseMemoDemo';

const Memo = () => {
    const [add, setAdd] = useState(0);

    const [count, setCount] = useState(0);

    const Update = () => {
      setAdd((add) => add + 1);
  };
  
  const NewUpdate = useCallback(() => {
    setAdd((add) => add + 1);
  })
  return (
    // <div>
    //   {add}
    //   {count}
    //   <button onClick={() => setCount((count) => count + 1)}>counter</button>
    //   {/* <ChildComponents add={Update} /> */}
    //   {/* <UseCallBack add={NewUpdate}/> */}
    // </div>
    <div>
      <UseMemoDemo/>
    </div>
  );
}

export default Memo
