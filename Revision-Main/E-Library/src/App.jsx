import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './Pages/BookList'
import Create from './Component/Create'


function App() {
  const [count, setCount] = useState(0)

  const [book, setBookData] = useState([]);

  
    let addBook = (value) => {
      setBookData([...book, value]);
    };


  return (
    <>
      <h1 className="text-3xl">Welcome To Your Personal Library</h1>
      <Create addBook={addBook} />
      <BookList book={book} setBookData={setBookData} />
    </>
  );
}

export default App
