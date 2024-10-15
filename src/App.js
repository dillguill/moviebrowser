import "./App.css";
import { useState, useEffect } from "react"; // add useState (will use useEffect down the road)
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState(""); // Set search state

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} /> {/* Add search function to navbar from const */}
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
