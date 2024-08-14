"use client";
import React from "react";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-[#0d1c9a] flex justify-center items-center p-6 md:px-20">
      <div className="max-w-3xl w-full bg-white text-blue-900 p-6 md:p-10 rounded-lg shadow-lg relative">
        <div className="relative mb-4">
          <Link
            href="/project"
            className="absolute top-4 left-4 z-10 text-blue-600 hover:text-blue-800 text-sm flex items-center bg-white bg-opacity-70 px-2 py-1 rounded-md transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go Back
          </Link>
          <img
            src="https://img.freepik.com/premium-vector/website-design-looking-work-finding-employees_4968-980.jpg?ga=GA1.1.500392571.1721672024&semt=ais_hybrid"
            alt="Project Visual"
            className="rounded-lg w-full h-auto "
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Job Site
        </h1>
        <p className="mb-4 text-sm md:text-base leading-relaxed">
          Welcome to our Job Site! We are committed to connecting job seekers
          with top employers. Our platform offers a user-friendly experience to
          help you find your next career opportunity quickly and easily.
        </p>
        <p className="mb-4 text-sm md:text-base leading-relaxed">
          Whether you're looking for your first job, a new challenge, or a
          career change, our job site has something for everyone. We offer a
          wide range of job listings from various industries, and our advanced
          search tools make it easy to find the perfect match.
        </p>
        <p className="text-sm md:text-base leading-relaxed">
          We also provide resources to help you prepare for your job search,
          including resume tips, interview advice, and career guidance. Join us
          today and take the first step towards your dream job!
        </p>
      </div>
    </div>
  );
}