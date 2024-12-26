import { useState, useEffect } from "react";

const Pagination = () => {
  const [proData, setProData] = useState([]);

  const [pageIndex, setPageIndex] = useState(1);

  console.log("proData", proData);

  const perProductData = 6;

  // Pagination

  let lastindex = pageIndex * perProductData; // 6

  let firstindex = lastindex - perProductData;

  let productDataList = proData.slice(firstindex, lastindex);

//   console.log(productDataList);

    async function API() {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      setProData(data);
    }

    useEffect(() => {
      API();
    }, []);

    const totalPages = Math.ceil(proData.length / perProductData);
    console.log("Pages = ",totalPages);
    
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-around">
        {productDataList.map((item) => {
          return (
            <div className="max-w-sm m-2 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg h-32 mx-auto"
                  src={item.image}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-evenly">
        <button
          className="bg-red-700 text-3xl p-2 px-4 rounded"
          onClick={() => setPageIndex((prev) => prev - 1)}
          disabled={firstindex <= 0}
        >
          Prev
        </button>
        {/* <span className="btn">{pageIndex}</span> */}
        <div>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              className="bg-red-700 text-3xl p-2 px-4 rounded m-2"
              key={i}
              onClick={() => setPageIndex(i + 1)}
              style={{
                fontWeight: pageIndex === i + 1 ? "bold" : "normal",
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          className="bg-red-700 text-3xl p-2 px-4 rounded"
          onClick={() => setPageIndex((next) => next + 1)}
          disabled={lastindex >= proData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
