import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          UrbanNext
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Register
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t">
              <Link
                to="/login"
                className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 text-center hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-md bg-blue-600 text-white text-center hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
