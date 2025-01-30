import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Blog App</h1>

          <ul className="flex items-center justify-end">
            <li className="mx-4">
              <Link href="/" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>
            <li className="mx-4">
              <Link href="/about" className="text-white hover:text-gray-400">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
