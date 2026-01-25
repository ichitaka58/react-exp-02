import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Chart from "./pages/chart";
import NotFound from "./pages/notfound";
import Customer from "./pages/customer";
import _App from "./_App.jsx";
import Orders from "./pages/orders/index.jsx";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <_App />
    </>
  );
}

export default App;
