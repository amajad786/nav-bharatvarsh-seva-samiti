import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import PaymentModal from "./PaymentModal";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="w-full relative">
      {/* Top Bar */}
      <div className="bg-cyan-500 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-2">
          {/* Left Links */}
          <div className="hidden sm:flex items-center gap-4">
            <a href="#" className="hover:underline">
              FAQ
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Help Desk
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Support
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-lg">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaGooglePlusG /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow static top-4 z-50 ">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-1">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="src\assets\images\NBSS-logo.jpg" alt="" className="w-18 md:w-20 object-cover" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
            <NavLink to="/" className={({ isActive }) =>
              isActive ? "text-yellow-500 font-semibold" : "cursor-pointer"
            }>HOME</NavLink>
            <NavLink to="/about" className={({ isActive }) =>
              isActive ? "text-yellow-500 font-semibold" : "cursor-pointer"
            }>ABOUT</NavLink>
            <NavLink to="/gallery" className={({ isActive }) =>
              isActive ? "text-yellow-500 font-semibold" : "cursor-pointer"
            }>GALLERY</NavLink>
            <a href="#">RAISE FUND</a>
            <a href="#">CONTACTUS</a>
          </nav>

          {/* Donate Button */}
          <button className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded"
            onClick={() => navigate('/donate')}
          >
            + DONATE NOW
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-yellow-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col px-4 py-3 gap-3 text-gray-700 font-medium">
              <NavLink to="/" className={({ isActive }) =>
                isActive ? "text-yellow-500 font-semibold" : "cursor-pointer"
              }>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) =>
                isActive ? "text-yellow-500 font-semibold" : "cursor-pointer"
              }>About</NavLink>
              <NavLink to="/gallery" className={({ isActive }) =>
                isActive ? "text-yellow-500 font-semibold" : "cursor-pointer"
              }>GALLERY</NavLink>
              <a href="#">CAMPAIGNS</a>
              <a href="#">PAGES</a>
              <a href="#">BLOG</a>
              <a href="#">SHOP</a>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded "
                onClick={() => navigate('/donate')}

              >
                + DONATE NOW
              </button>
            </nav>
          </div>
        )}
      </div>
      {isOpen && <PaymentModal onClose={() => setIsOpen(false)} />}

    </header>
  );
}


export default Header;
