import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {  Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/./Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Navbar/>
    <Routes>
      <Route path='/KCM-Trade-WEB/react/' element={<Home/>}/>
    </Routes>
    
   <Footer/>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  )
}

export default App
