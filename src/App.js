import './App.css';
import Navbar from './components/Header/Header';
import { Link, Route, Router, Routes } from 'react-router-dom';
import  Home from './components/Pages/Home'
import  About from './components/Pages/About'
import  Contact from './components/Pages/Contact'
import Services from './components/Pages/Services'
import Carosel from './components/Cards/Carosel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carosel/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
