import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/./Pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Pages/Login/Login";
import Contact from "./components/Pages/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Navbar />
        <Routes>
          <Route path="/KCM-Trade-WEB/react/" element={<Home />} />
          <Route path="/KCM-Trade-WEB/react/Login" element={<Login />} />
          <Route path="/KCM-Trade-WEB/react/Contact" element={<Contact />} />
        </Routes>
        <Home/>
      <Footer />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default App;
