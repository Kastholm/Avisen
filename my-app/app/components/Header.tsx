import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <div className="logo font-bold text-xl">Logo</div>
    <ul className="flex gap-4 text-2xl">
      <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
      <li><Link href={`/pages/articles/tag/underholdning`} className="hover:text-gray-300">Underholdning</Link></li>
      <li><Link href={`/pages/articles/tag/sport`} className="hover:text-gray-300">Sport</Link></li>
      <li><Link href={`/pages/articles/tag/bolig`} className="hover:text-gray-300">Bolig</Link></li>
      <li><Link href={`/pages/articles/category/indland`} className="hover:text-gray-300">Indland</Link></li>
      <li><Link href={`/pages/articles/category/udland`} className="hover:text-gray-300">Udland</Link></li>
      <li><Link href={`/pages/articles/category/sundhed`} className="hover:text-gray-300">Sundhed</Link></li>
      <li>  <Link href={`/pages/examples`} className="hover:text-gray-300">Examples</Link> </li>
    </ul>
  </nav>
  )
}

export default Header