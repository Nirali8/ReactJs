import React from 'react'
import { useLoaderData, Link } from "react-router-dom";


const LoaderPage = () => {
  const data = useLoaderData();
  console.log(data);
  
  return (
    <div>
      <h1 className="bg-purple-500 text-3xl">This is Loader PAge</h1>
      <ul>
        {data.map((item) => {
          return (
            <>
              <li className="bg-red-400 p-4 m-2">
                <Link className="underline" to={`${item.id}`}>
                  {item.username}
                  {/* {item.username} */}
                </Link>
                {/* <Link className="underline" to="/">
                  {item.title}
                </Link> */}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default LoaderPage
