import Navbar from "./Components/Navbar";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import About from "./Components/About";
import Start from "./Components/Start";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/start" element={<Start/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
