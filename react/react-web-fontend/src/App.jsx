import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {  Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/./Pages/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    
    <footer className="bg-dark text-white text-center py-3">
        &copy; 2025 KCM Clone. All rights reserved.
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  )
}

export default App
