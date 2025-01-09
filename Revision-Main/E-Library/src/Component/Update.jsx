import React, { useState } from "react";

const Update = ({ id, editData, book, setBookData, onClose }) => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("read");


  const handleSubmit = (e) => {
    e.preventDefault();
    editData.title = title;
    editData.author = author;
    editData.status=status
    console.log("edit", editData);

    const updatedBooks = book.map((item, index) =>
      index === id ? editData : item
    );
    console.log("update", updatedBooks);

    // Update the state with the new book array
    setBookData(updatedBooks);
    onClose();
  };

  return (
    <div className="flex justify-center mt-3 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="bg-emerald-200 w-fit border-2 border-solid border-emerald-400 p-2 h-fit">
          <div className="border-2 border-solid border-emerald-500 m-2">
            <label className="px-2">Book Title : </label>
            <input
              type="text"
              placeholder={editData.title}
              required
              // onChange={handleChange}
              // {(e) => setTitle(e.target.value)}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-solid border-emerald-400 rounded-md m-2"
            />
            <br />
          </div>

          <div className="border-2 border-solid border-emerald-500 m-2">
            <label className="px-2">Author Name : </label>
            <input
              type="text"
              placeholder={editData.author}
              required
              // onChange={handleChange}
              // {(e) => setAuthor(e.target.value)}
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

export default Update;
