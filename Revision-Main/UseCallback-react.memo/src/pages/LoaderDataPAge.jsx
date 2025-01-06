import React from 'react'
import { useLoaderData,useParams } from 'react-router-dom';

const LoaderDataPAge = () => {

    const { id } = useParams()
    const post = useLoaderData()

  return (
    <div>
      <h1 className="bg-blue-400 text-3xl">This is Details Page {id}</h1>
      <div>
        <h2>HelloI am {post.name.firstname} {post.name.lastname }</h2>
        <p>I am From {post.address.city}</p>
        <h2>My Email id is {post.email}</h2>
      </div>
    </div>
  );
}
export const LoaderData = async ({ params }) => {
  const { id } = params;
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const res = await fetch("https://fakestoreapi.com/users/" + id);

  if (!res.ok) {
    throw Error("Data Not Available!!!!!!!");
  }

  return res.json();
};

export default LoaderDataPAge
