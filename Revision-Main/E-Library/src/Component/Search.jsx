import React from "react";
import { FcSearch } from "react-icons/fc";

const Search = ({ book }) => {
  return (
    <div className="flex m-2 ">
      <input
        type="search"
        placeholder="Enter To Search"
        className="border-gray-900 border mx-2 rounded"
      />
      <FcSearch className="text-3xl border border-gray-900 rounded" />
    </div>
  );
};

export default Search;
