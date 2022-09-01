import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import House from "./House";
import Login from "./Login"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/house" element={<House />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
