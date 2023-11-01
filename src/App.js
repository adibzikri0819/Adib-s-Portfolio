import logo from './logo.svg';
import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Experience from './Component/Experience';
import Project from './Component/Project';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
    
    <Navbar/>
    <Header/>
    <About/>
    <Experience/>
    <Project/>
    <Contact/>
    <Footer/>

   
    <Routes>
    
    <Route path='/about' element={<About/>} />
    <Route path='/experience' element={<Experience/>} />
    <Route path='/project' element={<Project/>} />
    <Route path='/contact' element={<Contact/>} />
    </Routes>
          
    

    </div>
  );
}

export default App;
