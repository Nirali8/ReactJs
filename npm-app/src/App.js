import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { Sidebar } from "./Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>This NavBar is from App</p>
        <Navbar />
        <Sidebar />
      </header>
    </div>
  );
}

export default App;
