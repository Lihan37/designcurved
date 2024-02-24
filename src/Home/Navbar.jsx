import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side - CloudFlow logo */}
        <div className="flex items-center">
          <svg className="h-6 w-6 text-gray-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2 4a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-900">CloudFlow</span>
        </div>
        {/* Middle - Nav Links */}
        <div className="hidden md:flex flex-grow justify-center">
          <a href="#" className="text-gray-900 font-semibold mx-4">Home</a>
          <a href="#" className="text-gray-900 font-semibold mx-4">About Us</a>
          <a href="#" className="text-gray-900 font-semibold mx-4">Services</a>
          <a href="#" className="text-gray-900 font-semibold mx-4">Projects</a>
          <a href="#" className="text-gray-900 font-semibold mx-4">Blogs</a>
          <a href="#" className="text-gray-900 font-semibold mx-4">Page</a>
          <a href="#" className="text-gray-900 font-semibold mx-4">Contact</a>
        </div>
        
        <div className="flex items-center">
          <a href="#" className="text-gray-900">Need Help?</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
