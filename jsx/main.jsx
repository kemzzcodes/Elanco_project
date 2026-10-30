import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Sighting from "./pages/Sighting";

function App() 
{
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Sighting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;