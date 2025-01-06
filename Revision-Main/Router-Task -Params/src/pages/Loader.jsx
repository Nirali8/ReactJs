import React from "react";

const Loader = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await fetch("https://fakestoreapi.com/users");
  if (!res.ok) {
    throw Error("Data Not Found!!!!!!!");
  }
  return res.json();
};

export default Loader;
