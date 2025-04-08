import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS styles
import { Link } from 'react-router-dom';
import im1 from '../assets/im1.webp'; 

const Navbar = () => {
  const [isPackagesOpen, setPackagesOpen] = useState(false);
  

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">REBEL ROVER</div>
      <div className="w-12 h-12">
        <img src={im1} alt="React Vite Logo" className="object-cover" />
      </div>
      <ul className="flex space-x-4">
        <li><Link to='/' className="hover:text-gray-400">Home</Link></li>
        <li><Link to='/about' className="hover:text-gray-400">About Us</Link></li>
        <li 
          className="relative"
          onMouseEnter={() => setPackagesOpen(true)} 
          onMouseLeave={() => setPackagesOpen(false)}
        >
          <Link to='/packages' className="hover:text-gray-400">Package ▼</Link>
          {isPackagesOpen && (
            <ul className="absolute left-0 mt-2 bg-gray-700 text-sm rounded shadow-lg">
              <li><Link to='/package1' className="block px-4 py-2 hover:bg-gray-600">Adventure Package</Link></li>
              <li><Link to='/package2' className="block px-4 py-2 hover:bg-gray-600">Relaxation Package</Link></li>
            </ul>
          )}
        </li>
        <li><Link to='/blog' className="hover:text-gray-400">Single Blog</Link></li>
        <li><Link to='/contact' className="hover:text-gray-400">Contact</Link></li>
      </ul>
      <div className="text-xl cursor-pointer">🔍</div>
    </nav>
  );
};

export default Navbar;