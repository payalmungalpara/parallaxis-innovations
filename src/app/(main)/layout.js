"use client"
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";

// Define the MenuIcon component outside of JSX
function MenuIcon({ onClick }) {
  return (
    <button onClick={onClick}>
      <FcMenu className="text-white text-2xl hover:text-white cursor-pointer w-20 h-14" />
    </button>
  );
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 right-2 z-50 h-screen bg-transparent flex flex-col justify-around">
        {/* Menu bar */}
        <MenuIcon onClick={() => setIsOpen(!isOpen)} />

        {/* Social Icons */}
        <div className="flex flex-col items-center">
          <FaGithub className="text-white text-2xl hover:text-gray-400 cursor-pointer w-16 h-10 mb-10" />
          <FaLinkedin className="text-white text-2xl hover:text-gray-400 cursor-pointer w-16 h-10" />
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed inset-0 bg-cyan-100 bg-opacity-90 z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-2xl font-semibold text-blue-800">
          <a href="/">HOME</a>
          <a href="/about">ABOUT US</a>
          <a href="/services">SERVICES</a>
          <a href="/project">PROJECTS</a>
          <a href="/contact">CONTACT</a>
        </div>
      </div>
    </>
  );
}

const Layout = ({ children }) => {
  return (
    <>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div>{children}</div>

      {/* Footer */}
      <div className="space-y-4 p-4 bg-[#0d1c9a]">
        <footer className="bg-[#0d1c9a] text-center text-white py-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Opening Hours Section */}
            <div>
              <h2 className="text-lg font-bold">OPENING HOURS</h2>
              <p>Mon to  Fri: 9:30am – 7:30pm</p>
            </div>

            {/* Address Section */}
            <div>
              <h2 className="text-lg font-bold">ADDRESS</h2>
              <p>E-610 PNTC Tower, Pralad Nagar</p>
              <p>Ahmedabad - 380015</p>
            </div>

            {/* Get in Touch Section */}
            <div>
              <h2 className="text-lg font-bold">GET IN TOUCH</h2>
              <p>123-456-7890</p>
              <a href="mailto:info@parallaxis.tech" className="text-blue-300">
                info@parallaxis.tech
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
