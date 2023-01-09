//import { Routes,Route } from "react-router-dom";

import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import Trends from "./components/Trends";

function App() {

  return (
    <div className="md:grid md:grid-cols-4">
      <Navbar />
      <MainSection />
      <Trends />
    </div>
  
  );
}

export default App;
