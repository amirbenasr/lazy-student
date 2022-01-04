import Navbar from "./Components/Navbar";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
