import "./App.css";
import { useState, useEffect } from "react"; // add useState (will use useEffect down the road)
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]); //Loop through map results; will be props of SearchView
  const [searchText, setSearchText] = useState(""); // Shows results; setSearchText will change searchText it will re-render the entire application (there's a way around using useEffect; will learn later)

  return (
    <div>
      <Navbar />
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
