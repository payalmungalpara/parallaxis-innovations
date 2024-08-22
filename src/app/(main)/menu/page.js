// components/Sidebar.js
"use client"
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-4 right-4 z-50 text-blue-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Open"} Menu
      </button>

      <div
        className={`fixed inset-0 bg-cyan-100 bg-opacity-90 z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-blue-600 text-3xl"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-2xl font-semibold text-blue-800">
          <a href="#home">HOME</a>
          <a href="#services">Services</a>
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#team">THE TEAM</a>
          <a href="#clients">CLIENTS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </div>
    </>
  );
}
