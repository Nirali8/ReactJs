import React from "react";
import { useState, useEffect } from "react";
import { Pagination } from "flowbite-react";


const Blog = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  
  const onPageChange = (page) => setCurrentPage(page);
 
  useEffect(() => {
    const res = fetch("https://dummyapi.online/api/pokemon")
      // const res = fetch("https://api.sampleapis.com/recipes/recipes")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  });

  return (
    <div className="grid grid-cols-4">
      {data.map((item) => {
        return (
          <>
            <div className="m-1 p-1 border border-black rounded">
              <h1 className="text-2xl pb-3">{item.pokemon}</h1>
              <img src={item.image_url} alt="" className="w-52 h-52"></img>
              {/* <h1 className="text-2xl pb-3">{item.title}</h1>
              <img src={item.photoUrl} alt="" className="w-52 h-52"></img> */}
            </div>
          </>
        );
      })}
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={15}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
};

export default Blog;
