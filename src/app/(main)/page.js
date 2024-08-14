"use client";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* Header */}
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center relative"
        style={{ backgroundImage: `url('/bg.png')` }}
      >
        {/* Overlay */}
        <h1 className="relative text-white font-bold font-mono text-4xl sm:text-6xl text-center">
          Parallaxis <br /> Innovations
        </h1>
      </div>

      {/* About Section */}
      <div
        className="min-h-screen flex flex-col px-8 sm:px-16 lg:px-60 pt-16"
        style={{ backgroundImage: `url("b1.png")` }}
      >
        <div className="space-y-8">
          <div className="text-white text-4xl font-bold mb-4 text-center sm:text-left">
            ABOUT US
          </div>
          <div className="max-w-lg text-white text-lg">
            <ul className="list-disc space-y-4 text-justify">
              <li>
                Our vision is to be at the forefront of technological
                advancement, empowering industries to thrive in the digital age.
                We are committed to creating a future where technology serves as
                a catalyst for positive change and sustainable growth. By
                leveraging innovative solutions and staying ahead of industry
                trends, we aim to drive progress and efficiency across various
                sectors.
              </li>
              <li>
                At Parallaxis, we believe that technology has the power to
                transform lives and businesses. Our goal is to develop
                cutting-edge applications and systems that not only meet the
                current needs of our clients but also anticipate and adapt to
                future challenges. We are dedicated to fostering a culture of
                continuous learning and improvement, ensuring that our team
                remains at the pinnacle of technological expertise.{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex gap-8">
          <div className="flex flex-col text-center items-center">
            <div className="text-4xl font-bold text-white">100%</div>
            <div className="text-xl text-white">Client Satisfaction Rate</div>
          </div>
          <div className="flex flex-col text-center items-center">
            <div className="text-4xl font-bold text-white">20+</div>
            <div className="text-xl text-white">Industries Transformed</div>
          </div>
          <div className="flex flex-col text-center items-center">
            <div className="text-4xl font-bold text-white">30+</div>
            <div className="text-xl text-white">
              Tech Experts Driving Innovation
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-[#0d1c9a] text-white py-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-12 mt-14">OUR PROJECTS</h1>
        </header>

        <div className="flex flex-wrap justify-around gap-8">
          <div className="text-center w-full sm:w-1/3 px-4">
            <h2 className="text-2xl font-semibold mb-4">App Development</h2>
            <div className=" p-4 rounded-xl overflow-hidden">
              <img
                src="/app-development.png"
                alt="App Development"
                className="rounded-xl mx-auto"
              />
            </div>
          </div>

          <div className="text-center w-full sm:w-1/3 px-4">
            <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
            <div className=" p-4 rounded-xl overflow-hidden">
              <img
                src="/web-development.png"
                alt="Web Development"
                className="rounded-xl mx-auto"
              />
            </div>
          </div>

          <div className="text-center w-full sm:w-1/3 px-4">
            <h2 className="text-2xl font-semibold mb-4">
              Custom Software Development
            </h2>
            <div className=" p-4 rounded-xl overflow-hidden">
              <img
                src="custom-software-development.png"
                alt="Custom Software Development"
                className="rounded-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div
        className="text-white min-h-screen flex flex-col items-center justify-center text-center py-16"
        style={{
          backgroundImage: `url("blur-bg.png")`,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
        }}
      >
        <h1 className="text-4xl font-bold mb-12">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="flex flex-col items-center">
            <img
              src="service-icon-1.png"
              alt="Custom Software Development"
              width={100}
              height={80}
            />
            <h3 className="text-xl font-bold mt-4">
              Custom Software Development
            </h3>
            <p className="text-gray-300 mt-4 px-4">
              We provide expert consulting services to guide your digital
              transformation journey and optimize your IT infrastructure.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="service-icon-2.png"
              alt="Mobile Application Development"
              width={100}
              height={80}
            />
            <h3 className="text-xl font-bold mt-4">
              Mobile Application Development
            </h3>
            <p className="text-gray-300 mt-4 px-4">
              Our team excels in custom software development, creating tailored
              solutions to meet your unique business needs.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="service-icon-3.png"
              alt="Dedicated Software Developer Team"
              width={100}
              height={80}
            />
            <h3 className="text-xl font-bold mt-4">
              Dedicated Software Developer Team
            </h3>
            <p className="text-gray-300 mt-4 px-4">
              Our dedicated software developers team is committed to delivering
              high-quality software solutions tailored to meet your specific
              requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="min-h-screen flex items-center justify-center bg-[#0d1c9a] py-16 px-4">
        <div className="w-full max-w-lg p-8 bg-[#0d1c9a] rounded-md">
          <h2 className="text-4xl font-bold text-center text-[#ffffff] mb-8">
            GET IN TOUCH
          </h2>
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-[#0d1c9a] mb-2">Full name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full p-3 text-[#0d1c9a] rounded-md bg-blue-100 focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[#0d1c9a] mb-2">Email *</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 text-[#0d1c9a] rounded-md bg-blue-100 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-[#0d1c9a] mb-2">Subject</label>
              <input
                type="text"
                placeholder="e.g., Support"
                className="w-full p-3 text-[#0d1c9a] rounded-md bg-blue-100 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[#0d1c9a] mb-2">Message</label>
              <textarea
                placeholder="Enter your message"
                className="w-full p-3 text-[#0d1c9a] rounded-md bg-blue-100 focus:outline-none"
                rows={6}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
