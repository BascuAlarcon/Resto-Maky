import React from 'react'; 
import { Route, Routes } from 'react-router-dom';

import './App2.css';
import Footer from './components/Footer/Footer';
import Footer2 from './components/Footer/Footer_V2';
import Navbar from './components/Navbar/Navbar';  
import Home from './pages/Home/Home';
import { Menu } from './pages/Menu'; 
import { Privacidad } from './pages/Politicas';
import { Sucursales } from './pages/Sucursales';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container-body'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/> 
          <Route path='/sucursales' element={<Sucursales/>}/> 
          <Route path='/privacidad' element={<Privacidad/>}/> 
        </Routes>
      </div>
      <Footer2/>
    </div>
  );
}

export default App;
