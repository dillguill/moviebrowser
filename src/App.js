import './App.css';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import { Routes, Route } from 'react-router-dom';

// Write in a switch statement
/* swith(case) {
  case "Thing":
    do something
    break;
  case default:
    do something;
    break
} */

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
      </Routes>
    </div>
  );
}

export default App;
