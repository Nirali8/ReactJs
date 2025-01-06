import React from 'react'
import { useState } from 'react';

const ListRender = ({ array }) => {

const [data, setData] = useState(array);

  return (
    <div>
      <h1 className="bg-red-600 m-4 p-4 text-3xl">
        No of Element in {data.length}
      </h1>
      {data.length <= 0 ? (
        <h1 className="bg-red-600 m-4 p-4 text-3xl">No Item To Display</h1>
      ) : (
        <ul>
          {data.map((item) => {
            return <li className="text-black text-3xl bg-slate-600 m-4 p-4">{item.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default ListRender
