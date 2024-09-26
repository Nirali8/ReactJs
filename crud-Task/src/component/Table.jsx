import React from "react";
import { FiSearch } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";

const tableDetails = [
  {
    id: 1,
    name: "pillow",
    desc: "Sleeping well is important.",
    price: 8.99,
    category: "Personal",
  },
  {
    id: 2,
    name: "Earphone",
    desc: "You need this one if you love music.",
    price: 9.0,
    category: "Personal",
  },
  {
    id: 3,
    name: "Mouse",
    desc: "Very useful if you love your computer.",
    price: 11.35,
    category: "Personal",
  },
  {
    id: 4,
    name: "Trash Can",
    desc: "It will help you maintain cleanliness.",
    price: 3.95,
    category: "Sports",
  },
  {
    id: 5,
    name: "Eye Glasses",
    desc: "It will make you read better.",
    price: 6.0,
    category: "Sports",
  },
  {
    id: 6,
    name: "Laptop",
    desc: "Essential for work and study.",
    price: "999.00",
    category: "Electronics",
  },
  {
    id: 7,
    name: "Keyboard",
    desc: "Useful for typing.",
    price: "29.99",
    category: "Electronics",
  },
  {
    id: 8,
    name: "Chair",
    desc: "Comfortable seating.",
    price: "79.00",
    category: "Furniture",
  },
  {
    id: 9,
    name: "Desk",
    desc: "Perfect for workspaces.",
    price: "129.99",
    category: "Furniture",
  },
  {
    id: 10,
    name: "Monitor",
    desc: "Helps to extend display.",
    price: "199.00",
    category: "Electronics",
  },
];

const Table = () => {
  return (
    <div className="mx-5 mt-4">
      <p className="text-5xl text-center">Crud Operation</p>

      <hr />

      <div className="m-5 flex md:justify-between flex-col md:flex-row gap-4">
        <div className="w-full flex items-center  md:w-[30%]  ">
          <input
            type="text"
            placeholder="Type a name..."
            className="border  p-2  w-full"
          />
          <div className="bg-sky-700 p-3 text-white rounded-e-md hover:bg-white border-2 border-sky-700 hover:text-sky-700">
            <FiSearch />
          </div>
        </div>

        <div className="flex gap-3  items-center justify-between flex-col max-sm:justify-center sm:flex-row">
          <button
            className="flex max-sm:w-full  max-sm:justify-center items-center bg-red-500 text-sm sm:text-[16px]  text-white p-2 rounded-md 
             hover:bg-white border-2 border-red-500 hover:text-red-500"
          >
            <TiDelete className="text-xl" />
            Delete Selected
          </button>

          <button
            className="flex max-sm:w-full  max-sm:justify-center items-center
             bg-cyan-600 text-sm sm:text-[16px] text-white p-2 rounded-md hover:bg-white border-2 border-cyan-600 hover:text-cyan-600"
          >
            <MdOutlineDownloadForOffline className="text-xl" />
            Export CSV
          </button>

          <button
            className="flex max-sm:w-full  max-sm:justify-center items-center bg-cyan-700 text-sm sm:text-[16px] text-white p-2 rounded-md
                    hover:bg-white border-2 border-cyan-700 hover:text-cyan-700"
          >
            {" "}
            <TiPlus className="text-xl" />
            Create Record
          </button>
        </div>
      </div>

      <div className="max-md:overflow-hidden max-md:overflow-x-scroll ">
        <table className="table-auto w-[95%] m-auto">
          <thead className="border-2 ">
            <tr className="text-xl text-nowrap bg-gray-200">
              <th>
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="w-fit ">
            {tableDetails.map((current) => {
              return (
                <tr
                  className="text-center border-0  text-nowrap "
                  key={current.id}
                >
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td> {current.name} </td>
                  <td> {current.desc} </td>
                  <td> ${current.price} </td>
                  <td> {current.category} </td>
                  <td className="flex justify-center gap-4 h-full item-center">
                    <a
                      href=""
                      className="flex items-center gap-1 h-full  bg-cyan-500 py-1 px-2 md:px-4 rounded-md text-white border-2 border-cyan-500 hover:bg-white hover:text-cyan-700 "
                    >
                      <BiSolidEdit />
                      <button className=" max-sm:hidden ">Edit</button>
                    </a>

                    <a
                      href=""
                      className="flex items-center gap-1 h-full bg-red-500 py-1 px-2 md:px-4 rounded-md text-white hover:text-red-500 hover:bg-white border-2 border-red-500"
                    >
                      <MdOutlineDeleteForever />
                      <button className=" max-sm:hidden">Delete</button>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center my-8 flex-col sm:flex-row gap-4">
        <div className="flex items-center ml-3">
          <button
            onclick="previousPage()"
            className="bg-cyan-800 text-white p-2 text-xl hover:text-cyan-800 border-2 border-cyan-800 hover:bg-white"
          >
            <MdKeyboardDoubleArrowLeft />
          </button>
          <span className="px-2 py-1.5 bg-gray-100">1</span>
          <button
            onclick="nextPage()"
            className="bg-cyan-800 text-white p-2 text-xl hover:text-cyan-800 border-2 border-cyan-800 hover:bg-white"
          >
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>

        <div className="flex items-center w-full sm:w-[30%]">
          <input
            type="text"
            placeholder="Type a Page No..."
            className="border  p-2  w-full"
          />
          <div className="bg-sky-700 p-2  text-white rounded-e-md  hover:bg-white border-2 border-sky-700 hover:text-sky-700">
            GO
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
