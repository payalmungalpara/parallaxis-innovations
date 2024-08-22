"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItemGrid = ({ imageUrl, title, description, link }) => (
  <div className="project-item bg-[#0d1c9a] rounded-lg shadow-md p-4">
    <Image src={imageUrl} alt={title} width={300} height={200} className="rounded-lg w-full h-48 object-cover" />
    <h3 className="text-xl font-semibold mt-2">{title}</h3>
    <p className="text-gray-600 mt-2 line-clamp-3">{description}</p>
    <Link href={link} className="text-blue-600 hover:underline mt-2 inline-block">
      Read More
    </Link>
  </div>
);

const ProjectItemList = ({ imageUrl, title, description, link }) => (
  <div className="project-item bg-[#0d1c9a] rounded-lg shadow-md p-4 flex items-center">
    <Image src={imageUrl} alt={title} width={100} height={100} className="rounded-lg w-24 h-24 object-cover mr-4" />
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-1 line-clamp-2">{description}</p>
      <Link href={link} className="text-blue-600 hover:underline mt-1 inline-block">
        Read More
      </Link>
    </div>
  </div>
);

const ViewToggle = ({ isGridView, setIsGridView }) => (
  <div className="flex justify-end mb-4">
    <button
      className={`px-4 py-2 rounded-l-lg ${isGridView ? 'bg-blue-500 text-white' : 'bg-[#0d1c9a]'}`}
      onClick={() => setIsGridView(true)}
    >
      Grid
    </button>
    <button
      className={`px-4 py-2 rounded-r-lg ${!isGridView ? 'bg-blue-500 text-white' : 'bg-[#0d1c9a]'}`}
      onClick={() => setIsGridView(false)}
    >
      List
    </button>
  </div>
);

const Page = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const backendUrl = 'http://localhost:8000/projects';
        console.log("Fetching projects from backend...");
        const response = await fetch(backendUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch projects from backend');
        }
        const data = await response.json();

        // Log the entire data structure to understand it
        console.log("Fetched data:", JSON.stringify(data, null, 2));

        // Assuming data should be an array, or nested inside an object
        if (Array.isArray(data)) {
          setProjects(data);
        } else if (data.projects && Array.isArray(data.projects)) {
          setProjects(data.projects);
        } else {
          throw new Error('Fetched data is not an array or does not contain a projects array');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchProjects();
  }, []);
  
  return (
    <div>
      {/* Header */}
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center relative"
        style={{ backgroundImage: `url('/bg.png')` }}
      >
        <h1 className="relative text-white font-bold font-mono text-4xl sm:text-6xl 4k:text-8xl text-center">
          Our Projects
        </h1>
      </div>
      
      {isLoading && <div className="text-white text-center">Loading projects...</div>}
      {error && <div className="text-red-500 text-center">Error: {error}</div>}
      
      {!isLoading && !error && (
        <>
          <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
          
          {isGridView ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <ProjectItemGrid
                  key={project.id || index}
                  imageUrl={project.imageUrl}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {projects.map((project, index) => (
                <ProjectItemList
                  key={project.id || index}
                  imageUrl={project.imageUrl}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Page;
c