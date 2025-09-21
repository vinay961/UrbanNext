import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">UrbanNext</h2>
          <p className="text-sm text-gray-400">
            Making room search simple & stress-free.
          </p>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          <li>
            <a href="/" className="hover:text-white transition">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-white transition">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-white transition">Contact</a>
          </li>
          <li>
            <a href="/rooms" className="hover:text-white transition">Find Rooms</a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-3">
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
            <FaFacebookF size={14} />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-sky-400 transition">
            <FaTwitter size={14} />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition">
            <FaInstagram size={14} />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition">
            <FaLinkedinIn size={14} />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-gray-500 text-xs mt-4 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} UrbanNext. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
