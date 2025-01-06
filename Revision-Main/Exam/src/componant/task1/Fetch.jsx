import React from 'react'
import { useEffect,useState } from 'react'

const Fetch = () => {

    const[data,setData]=useState([])
     useEffect(() => {
        const res = fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((res) => {
            setData(res);
          });
      });
    
  return (
    <div>
      <ul>
        {data.map((item) => {
          return (
            <li className="text-black text-3xl bg-slate-600 m-4 p-4">
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Fetch
