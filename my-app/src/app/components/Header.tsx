import React from 'react'

function Header() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <div className="logo font-bold text-xl">Logo</div>
    <ul className="flex gap-4">
      <li><a href="#home" className="hover:text-gray-300">Home</a></li>
      <li><a href="#about" className="hover:text-gray-300">About</a></li>
      <li><a href="#services" className="hover:text-gray-300">Services</a></li>
      <li><a href="#portfolio" className="hover:text-gray-300">Portfolio</a></li>
      <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
    </ul>
  </nav>
  )
}

export default Header