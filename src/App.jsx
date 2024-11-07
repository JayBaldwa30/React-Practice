import "./App.css";

import HelloWorld from "./components/HelloWorld";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HelloWorld />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
