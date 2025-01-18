import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Signin from "./components/Signin";
import Hero from "./components/Hero";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Hero />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
