import React from "react";

const page = () => {
  return (
    <div>
      {/* Header */}
      <div>
        {/* Overlay */}
        {/* About Section */}
        <div className="bg-[#0D1C9A]">
          <div>
            <h1 className="text-white pt-10 text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold mb-4 lg:text-center md:text-center sm:text-left">
              ABOUT US
            </h1>
          </div>
          <div className="min-h-screen flex flex-wrap">
            {/* Content Section */}
            <div className="basis-[100%] lg:basis-[60%]">
              <div className="lg:px-16 md:px-14 sm:px-10 px-4 pt-20">
                <ul className="list-disc space-y-4 text-justify text-white lg:text-xl sm:text-sm ">
                  <li>
                    Our vision e at the forefront of technological advancement,
                    empowering industries to thrive in the digital age. We are
                    committed to creating a future where technology serves as a
                    catalyst for positive change and sustainable growth. By
                    leveraging innovative solutions and staying ahead of
                    industry trends, we aim to drive progress and efficiency
                    across various sectors.
                  </li>
                  <li>
                    At Parallaxis, we believe that technology has the power to
                    transform lives and businesses. Our goal is to develop
                    cutting-edge applications and systems that not only meet the
                    current needs of our clients but also anticipate and adapt
                    to future challenges. We are dedicated to fostering a
                    culture of continuous learning and improvement, ensuring
                    that our team remains at the pinnacle of technological
                    expertise.
                  </li>
                </ul>
              </div>
              <div className="mt-12 lg:pl-8 flex flex-col sm:flex-row gap-8 justify-center max-w-6xl 3xl:max-w-7xl mx-auto">
                <div className="flex flex-col text-center items-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold text-white">
                    100%
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl text-white">
                    Client Satisfaction Rate
                  </div>
                </div>
                <div className="flex flex-col text-center items-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold text-white">
                    20+
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl text-white">
                    Industries Transformed
                  </div>
                </div>
                <div className="flex flex-col text-center items-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold text-white">
                    30+
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl text-white">
                    Tech Experts Driving Innovation
                  </div>
                </div>
              </div>
            </div>
            {/* Image Section */}
            <div className="hidden lg:flex basis-[40%]">
              <div className="flex items-start pt-14 pl-0">
                <img src={"about-us-avatar.png"} 
                alt="About Us" 
                className="opacity-40 filter drop-shadow-blue"
                />  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
