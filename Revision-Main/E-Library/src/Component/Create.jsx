import React, { useState } from "react";


const Create = ({addBook}) => {

     const [title, setTitle] = useState("");
     const [author, setAuthor] = useState("");
     const [status, setStatus] = useState("read");

     const handleSubmit = (e) => {
       e.preventDefault();
       addBook({ title, author, status });
     };

  return (
    <div className="flex justify-center mt-3">
      <form onSubmit={handleSubmit}>
        <div className="bg-emerald-200 w-fit border-2 border-solid border-emerald-400 p-2 h-fit">
          <div className="border-2 border-solid border-emerald-500 m-2">
            <label className="px-2">Book Title : </label>
            <input
              type="text"
              required
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-solid border-emerald-400 rounded-md m-2"
            />
            <br />
          </div>

          <div className="border-2 border-solid border-emerald-500 m-2">
            <label className="px-2">Author Name : </label>
            <input
              type="text"
              required
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-solid border-emerald-400 rounded-md m-2"
            />
            <br />
          </div>

          <div className="border-2 border-solid border-emerald-500 m-2 p-2">
            <label htmlFor="" className="m-2">
              Status :{" "}
            </label>
            <select
              name=""
              id=""
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-md border-2 border-solid border-emerald-400 p-0.5"
            >
              <option value="" className="">
                read
              </option>
              <option value="" className="">
                unread
              </option>
            </select>
          </div>

          <div>
            <button className="bg-emerald-400 border-2 border-solid border-emerald-600 m-2 px-2 py-1 rounded-md">
              Click To Add Book
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
