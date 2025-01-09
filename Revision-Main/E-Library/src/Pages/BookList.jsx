import React, { useState } from "react";
import Update from "../Component/Update";
import Search from "../Component/Search";

const BookList = ({ book, setBookData }) => {
  const [editData, setEditData] = useState(null);
  const [id,setId]=useState(0)

  function handleEdit(item,index) {
    console.log("here", item);
    // return <Update editData={item} book={book} setBookData={setBookData} />;
    setId(index)
    setEditData(item);
  }

  function handleDelete(index) {
    // console.log(index);
    setBookData(book.filter((item, index1) => index1 !== index));
  }

  function handleStatus(index) {
   
     const updatedBooks = book.map((item, id) =>
       id === index
         ? { ...item, status: item.status === "read" ? "unread" : "read" }
         : item
     );
     setBookData(updatedBooks);
  }

  return (
    <div className="m-auto">
      <h1>Here is the full Books Detail</h1>
      <div className="bg-yellow-300 w-1/2 rounded-md p-2 m-2 mx-auto">
        {book.length === 0 ? (
          <div>No Data avilable</div>
        ) : editData ? (
            <Update
              id={id}
            editData={editData}
            book={book}
            setBookData={setBookData}
            onClose={() => setEditData(null)} // Option to close the edit view
          />
        ) : (
          book.map((item, index) => {
            return (
              <div key={index} className="flex justify-between m-2 mx-auto">
                <h1>{item.title}</h1>
                <h1>{item.author}</h1>
                <div className="ml-44">
                  <button
                    className={`p-1 rounded-md px-2 mx-2 ${
                      item.status === "read" ? "bg-orange-300" : "bg-slate-500"
                    }`}
                    onClick={() => handleStatus(index)}
                  >
                    {item.status === "read" ? "Read" : "Unread"}
                  </button>
                  <button
                    className="bg-blue-400 p-1 rounded-md px-2 mx-2 "
                    onClick={() => {
                      handleEdit(item,index);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-400 p-1 rounded-md px-2 mx-2"
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Search book={book} />
    </div>
  );
};

export default BookList;
