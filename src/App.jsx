import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Chart from "./pages/chart";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/chart" element={<Chart />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
