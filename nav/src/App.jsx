import React from 'react'
import Navbar from './components/Navbar'
// import './Navbar.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Package from './pages/Package'
import SingleBlog from './pages/SingleBlog'
import Contact from './pages/Contact'
function App() {
 

  return (
    
      <div>
        <Router>
           <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
             <Route path="/packages" element={<Package/>} />
            <Route path="/blog" element={<SingleBlog />} />
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </Router>
       

        
    </div>
  )
}

export default App
