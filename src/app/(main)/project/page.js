"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectItem = ({ imageUrl, title, description, link }) => (
  <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden mb-2">
    <div className="md:flex">
      <div className="md:flex-shrink-0 w-full md:w-96 h-64 relative">
        <img 
          src={imageUrl} 
          alt={title} 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <div className="p-8 flex-grow">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link || '#'} passHref>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Read More
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const Header = () => (
  <div
    className="bg-cover bg-center h-screen flex items-center justify-center"
    style={{ backgroundImage: `url('/bg.png')` }}
  >
    <h1 className="text-white font-bold font-mono text-4xl sm:text-6xl text-center">
      Projects
    </h1>
  </div>
);

const Page = () => {
  const projects = [
    
    {
      imageUrl: 'https://img.freepik.com/premium-vector/website-design-looking-work-finding-employees_4968-980.jpg?ga=GA1.1.500392571.1721672024&semt=ais_hybrid',
      title: 'Job site',
      description: 'Most job sites, though, are not very user-friendly and frustrate job hunters. A well-designed job site, however, has the potential to receive lots of website visitors and even generate some income.',
      link: '#',
    },
    {
      imageUrl: 'https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg',
      title: 'Ecommerce website',
      description: 'An ecommerce store can range from a few items to hundreds, and its well within the capabilities of anyone to set up. You can always start as a small business and scale up as you gain more customers.'
    },
    {
      imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg',
      title: 'Service-based website',
      description: 'A service-based website showcases professional services, attracting clients and establishing credibility in your field.'
    },
    {
      imageUrl: 'https://img.freepik.com/free-photo/saas-concept-collage_23-2149399293.jpg?ga=GA1.1.500392571.1721672024&semt=ais_hybrid',
      title: 'SaaS website',
      description: 'Software as a Service (SaaS) websites provide cloud-based solutions, offering scalable and accessible services to businesses and individuals.'
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/video-game-development-vector-illustration-with-games-programming-coding-hand-drawn-templates_2175-15236.jpg?ga=GA1.1.500392571.1721672024&semt=ais_hybrid',
      title: 'Gaming Web Application',
      description: 'Immersive gaming web applications provide interactive entertainment experiences directly through browsers.'
    },
    {
      imageUrl: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg',
      title: 'Web Application',
      description: 'Dynamic web applications offer interactive user experiences, solving complex problems through browser-based interfaces.'
    },
    {
      imageUrl: 'https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-5522.jpg',
      title: 'Chat-Bot',
      description: 'AI-powered chatbots enhance customer service and user engagement through intelligent conversation interfaces.'
    },
    {
      imageUrl: 'https://img.freepik.com/free-vector/car-service-abstract-concept-illustration_335657-3840.jpg',
      title: 'Auto-Car Shop',
      description: 'Online auto-car shop platforms simplify vehicle purchasing and maintenance scheduling for car enthusiasts and everyday drivers.'
    },
  ];
  
  return (
    <div className="bg-[#0d1c9a] min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-blue-300 p-6 rounded-lg">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;