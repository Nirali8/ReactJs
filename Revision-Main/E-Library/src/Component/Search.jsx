import React,{useState} from "react";
import { FcSearch } from "react-icons/fc";

const Search = ({ book, setBookData }) => {
  const [searchQuery, setSearchQuery] = useState("");

   const handleSearchChange = (e) => {
     setSearchQuery(e.target.value);
   };

   // Filter books based on the search query
   const filteredBooks = book.filter(
     (item) =>
       item.title.toLowerCase().includes(searchQuery.toLowerCase())
      //  ||
      //  item.author.toLowerCase().includes(searchQuery.toLowerCase())
   );

  return (
    <div className="flex m-auto  justify-center">
      <input
        type="search"
        placeholder="Search Title"
        className="border-gray-900 border mx-2 rounded"
      />
      <FcSearch className="text-3xl border border-gray-900 rounded" />
      <div>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <h3>{item.author}</h3>
              <button onClick={() => handleEdit(item)}>Edit</button>
            </div>
          ))
        ) : (
          <p>No books match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
