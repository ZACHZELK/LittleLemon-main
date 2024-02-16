import './App.css'
import { Route, Routes } from "react-router-dom";
import { BookingPage } from './Components/pages/BookingPage.js';
import { About, Login, Menu, OrderOnline, } from "./Components/pages";
import { Nav } from "./Components/Nav.js";
import { Footer } from "./Components/Footer.js"
import { Home } from './Components/pages/Home.js';;

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Reservations" element={<BookingPage/>}/>
        <Route path="/Order-Online" element={<OrderOnline/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </div> 
  );
};

export default App;