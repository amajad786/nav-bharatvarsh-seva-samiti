import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Our Company */}
        <div>
          <h3 className="font-bold text-white mb-4">OUR COMPANY</h3>
          <p className="text-sm leading-6 mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse
            et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit
            augue. Cras tellus. In pulvinar lectus a est. Curabitur eget orci.
          </p>
          <div className="flex flex-wrap gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-6 bg-white p-1 rounded"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="Mastercard"
              className="h-6 bg-white p-1 rounded"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Discover_Card_logo.svg/2560px-Discover_Card_logo.svg.png"
              alt="Discover"
              className="h-6 bg-white p-1 rounded"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
              alt="Amex"
              className="h-6 bg-white p-1 rounded"
            />
          </div>
        </div>

        {/* Campaign */}
        <div>
          <h3 className="font-bold text-white mb-4">CAMPAIGN</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-500 cursor-pointer">Campaign</li>
            <li className="hover:text-yellow-500 cursor-pointer">Pricing</li>
            <li className="hover:text-yellow-500 cursor-pointer">Support</li>
            <li className="hover:text-yellow-500 cursor-pointer">Discover</li>
            <li className="hover:text-yellow-500 cursor-pointer">Terms of Use</li>
            <li className="hover:text-yellow-500 cursor-pointer">Checkout</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-bold text-white mb-4">EXPLORE</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-500 cursor-pointer">Environment</li>
            <li className="hover:text-yellow-500 cursor-pointer">Fashion</li>
            <li className="hover:text-yellow-500 cursor-pointer">Health</li>
            <li className="hover:text-yellow-500 cursor-pointer">Innovation</li>
            <li className="hover:text-yellow-500 cursor-pointer">Nonprofit</li>
            <li className="hover:text-yellow-500 cursor-pointer">Travels</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-white mb-4">NEWSLETTER</h3>
          <div className="flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email..."
              className="px-4 py-2 bg-white rounded-l-md w-full text-gray-900 focus:outline-none"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 px-4 rounded-r-md text-white">
              ➤
            </button>
          </div>

          <h3 className="font-bold text-white mt-6 mb-4">FOLLOW US</h3>
          <div className="flex gap-3 text-lg">
            <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
            <FaGooglePlusG className="hover:text-yellow-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-yellow-500 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#0d1117] text-center text-sm py-4 border-t border-gray-700">
        © Copyright 2025, All Rights Reserved by Shiv Sumitra Group Foundation
      </div>
    </footer>
  );
};

export default Footer;
