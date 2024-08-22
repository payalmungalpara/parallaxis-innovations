"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../sanity';

const ProjectItem = ({ imageUrl, title, description, link }) => (
  <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden mb-4">
    <div className="md:flex">
      <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] relative">
        <img 
          src={urlFor(imageUrl).url()} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 sm:p-6 lg:p-8 flex-grow">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4">{description}</p>
        <Link href={link || '[id]'} passHref>
          <button className="bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded hover:bg-blue-600 transition">
            Read More
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const Header = () => (
  <div
    className="bg-cover bg-center h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen flex items-center justify-center"
    style={{ backgroundImage: `url('/bg.png')` }}
  >
    <h1 className="text-white font-bold font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
      Projects
    </h1>
  </div>
);

const Page = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await client.fetch(`
        *[_type == "project"]{
          title,
          description,
          imageUrl,
          link
        }
      `);
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-[#0d1c9a] min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-32 py-8">
        <div className="bg-blue-300 p-4 sm:p-6 lg:p-8 rounded-lg">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
