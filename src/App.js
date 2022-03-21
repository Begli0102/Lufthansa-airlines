import React from "react";
import "./App.css";
import Airlines from "./components/Airlines/Airlines";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Airlines />
      <Pagination/>
    </div>
  );
}

export default App;
