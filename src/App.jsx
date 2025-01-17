import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Signin from "./components/Signin";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
