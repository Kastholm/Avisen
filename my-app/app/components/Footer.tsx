import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p className="text-sm">© 2024 Dit Firma. Alle rettigheder forbeholdes.</p>
      <p className="text-sm">Følg os på sociale medier</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-gray-400">Facebook</a>
        <a href="#" className="hover:text-gray-400">Twitter</a>
        <a href="#" className="hover:text-gray-400">Instagram</a>
      </div>
    </footer>
  )
}

export default Footer