import React from "react";
import { AnimalList } from "./Data";
import { useState } from "react";
import ListRender from "./ListRender";

const List = ({array}) => {

  const [data, setData] = useState(AnimalList);

  return (
    <div>
      {/* <h1>here{data.length}</h1>
      <ul>
        {data.map((item) => {
          return <li className="text-black">{item.name}</li>;
        })}
      </ul> */}
      <ListRender array={data} />
    </div>
  );
};

export default List;
