import React from 'react';

const Header = () => (
  <div
    className="bg-cover bg-center h-screen flex items-center justify-center"
    style={{ backgroundImage: `url('/bg.png')` }}
  >
    <h1 className="text-white font-bold font-mono text-4xl sm:text-6xl text-center">
      Services
    </h1>
  </div>
);

const Card = ({ title, description, imageUrl }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-full max-w-lg sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg overflow-hidden shadow-xl bg-white">
      <img className="w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover" src={imageUrl} alt={title} />
      <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-90 w-full">
        <div className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 text-black">
          {title}
        </div>
        <p className="text-gray-700 text-xs sm:text-sm lg:text-base">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const CardGrid = () => {
  const cards = [
    {
      title: 'Mobile Testing',
      description: 'Crafting Digital Experiences That Elevate Your Brand.',
      imageUrl: 'https://img.freepik.com/free-vector/mobile-testing-concept-illustration_114360-2449.jpg?ga=GA1.1.500392571.1721672024&semt=ais_hybrid',
    },
    {
      title: 'Mobile App Development',
      description: 'Empowering Ideas Through Innovative Mobile App Solutions.',
      imageUrl: 'https://static.wixstatic.com/media/7aa146_aa7343e1b21749acbbbb728b1ea84e09~mv2.jpg/v1/crop/x_27,y_0,w_572,h_626/fill/w_443,h_485,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/person-is-using-phone-with-many-icons-it_987366-62809_jpg_ga%3DGA1_1_500392571_1721672024%26se.jpg',
    },
    {
      title: 'API Development',
      description: 'Connecting Systems Seamlessly with Custom API Solutions',
      imageUrl: 'https://img.freepik.com/free-vector/flat-design-api-illustration_23-2149392284.jpg?ga=GA1.1.500392571.1721672024&semt=ais_hybrid',
    },
    {
      title: 'Software Testing',
      description: 'Ensuring Quality and Performance, One Test at a Time.',
      imageUrl: 'https://img.freepik.com/premium-vector/software-testing-vector-illustration-featuring-application-engineering-debugging-development-process-programming-coding-flat-background_2175-25607.jpg?ga=GA1.1.500392571.1721672024&semt=ais_hybrid',
    },
    {
      title: 'Custom Software Development',
      description: 'Building Tailored Solutions for Your Unique Business Needs.',
      imageUrl: 'https://img.freepik.com/free-vector/version-control-concept-illustration_114360-2451.jpg?ga=GA1.1.500392571.1721672024&semt=ais_hybrid',
    },
    {
      title: 'SaaS/PaaS Product Development',
      description: 'Developing scalable, robust SaaS/PaaS products with seamless integration.',
      imageUrl: 'https://img.freepik.com/premium-vector/creative-abstract-saas-illustration_52683-79843.jpg?ga=GA1.1.500392571.1721672024&semt=ais_hybrid',
    },
    {
      title: 'Software Development',
      description: 'Software development tailored for efficiency, scalability, and user needs.',
      imageUrl: 'https://static.wixstatic.com/media/7aa146_798e25f8bbfb4ab7ac20249b49900ff2~mv2.jpg/v1/crop/x_145,y_0,w_450,h_493/fill/w_443,h_485,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/web-dev-design-3d-vector-illustration-laptop-phone-coding-tools_1178440-14929_edited.jpg',
    },
    {
      title: 'Mobile App Development',
      description: 'Empowering Ideas Through Innovative Mobile App Solutions.',
      imageUrl: 'https://img.freepik.com/premium-vector/professional-programmers-develop-smartphone-applications_18660-7019.jpg?ga=GA1.1.500392571.1721672024&semt=ais_hybrid',
    },
    {
      title: 'API Integration Services',
      description: 'Seamless API integration services for enhanced connectivity, functionality.',
      imageUrl: 'https://img.freepik.com/free-vector/gradient-api-illustration_23-2149379182.jpg?ga=GA1.1.500392571.1721672024&semt=ais_hybrid',
    },
    {
      title: 'Web Applications ',
      description: 'Developing dynamic web applications for superior performance, user experience.',
      imageUrl: 'https://img.freepik.com/free-vector/app-development-concept-with-phone-laptop_23-2148701016.jpg?ga=GA1.1.500392571.1721672024&semt=ais_hybrid',
    },
    {
      title: 'AWS Cloud Services',
      description: 'Comprehensive AWS Cloud services for scalability, reliability, security.',
      imageUrl: 'https://static.wixstatic.com/media/7aa146_3cef7a2031894f0693e627066b10c468~mv2.jpg/v1/crop/x_46,y_0,w_533,h_584/fill/w_443,h_485,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cloud-services-isometric-composition-with-small-figures-people-with-computer-screens_1284-.jpg',
    },
    {
      title: 'Software Product Development',
      description: 'Innovative software product development for customized, scalable.',
      imageUrl: 'https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg?ga=GA1.1.500392571.1721672024&semt=ais_hybrid',
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-[#0d1c9a] p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:px-5 lg:px-32">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </>

  );
};

export default CardGrid;
