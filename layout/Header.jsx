
import Link from 'next/link'
import { Home, Users, ShoppingCart } from "lucide-react";
import React from 'react'

function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">Logo</div>

      <nav className="flex items-baseline gap-6">
        <Link href="/" className="flex items-center gap-1 text-gray-700 hover:text-blue-500">
          <Home size={20} />
          <span>Home</span>
        </Link>

        <Link href="/users" className="flex items-center gap-1 text-gray-700 hover:text-blue-500">
          <Users size={20} />
          <span>Users</span>
        </Link>

        <Link href="/product" className="flex items-center gap-1 text-gray-700 hover:text-blue-500">
          <ShoppingCart size={20} />
          <span>Products</span>
        </Link>
      </nav>
    </header>
  )
}

export default Header
