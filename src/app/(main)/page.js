"use client";
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      {/* Header */}
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center relative"
        style={{ backgroundImage: `url('/bg.png')` }}
      >
        <h1 className="relative text-white font-bold font-mono text-4xl sm:text-6xl 4k:text-8xl text-center">
          Parallaxis <br /> Innovations
        </h1>
      </div>

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
            <div className="w-full lg:px-16 md:px-14 sm:px-10 px-4 pt-20">
              <ul className="w-full list-disc space-y-4 text-justify text-white lg:text-xl sm:text-sm xl:text-xl 4k:text-8xl">
                <li>
                  Our vision e at the forefront of technological advancement,
                  empowering industries to thrive in the digital age. We are
                  committed to creating a future where technology serves as a
                  catalyst for positive change and sustainable growth. By
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
                  remains at the pinnacle of technological expertise.
                </li>
              </ul>
            </div>
            <div className="mt-12 lg:pl-8 flex flex-col sm:flex-row gap-8 justify-center max-w-6xl 3xl:max-w-7xl mx-auto">
              <div className="flex flex-col text-center items-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold text-white">
                  100%
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl 4k:text-4xl text-white">
                  Client Satisfaction Rate
                </div>
              </div>
              <div className="flex flex-col text-center items-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold text-white">
                  20+
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl 4k:text-4xl text-white">
                  Industries Transformed
                </div>
              </div>
              <div className="flex flex-col text-center items-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold text-white">
                  30+
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl 4k:text-4xl text-white">
                  Tech Experts Driving Innovation
                </div>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="hidden lg:flex basis-[40%]">
            <div className="flex items-start pt-14 pl-20">
              <img
                src={"about-us-avatar.png"}
                alt="About Us"
                className="opacity-40 filter drop-shadow-blue"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-[#0d1c9a] text-white py-8">
        <header className="text-center">
          <h1 className="text-white mt-4 text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold mb-24 lg:text-center md:text-center sm:text-left">
            Our Projects
          </h1>
        </header>
        <div className="flex flex-wrap justify-around gap-8">
          <div className="text-center w-full sm:w-1/3 px-4">
            <h2 className="text-2xl sm:text-3xl 4k:text-4xl font-semibold mb-4">
              App Development
            </h2>
            <div className="p-4 rounded-xl overflow-hidden">
              <img
                src="/app-development.png"
                alt="App Development"
                className="rounded-xl mx-auto"
              />
            </div>
          </div>

          <div className="text-center w-full sm:w-1/3 px-4">
            <h2 className="text-2xl sm:text-3xl 4k:text-4xl font-semibold mb-4">
              Web Development
            </h2>
            <div className="p-4 rounded-xl overflow-hidden">
              <img
                src="/web-development.png"
                alt="Web Development"
                className="rounded-xl mx-auto"
              />
            </div>
          </div>

          <div className="text-center w-full sm:w-1/3 px-4">
            <h2 className="text-2xl sm:text-3xl 4k:text-4xl font-semibold mb-4">
              Custom Software Development
            </h2>
            <div className="p-4 rounded-xl overflow-hidden">
              <img
                src="custom-software-development.png"
                alt="Custom Software Development"
                className="rounded-xl mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <Link href="/project">
          <button className="absolute bottom-4 right-4 px-4 py-2 md:px-6 md:py-3 text-lg md:text-xl lg:text-xl 4k:text-3xl bg-blue-500 text-white font-bold rounded hover:bg-[#0d1c9a] transition duration-300">
          Read More
            </button>
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div>
        <div
          className="text-white min-h-screen flex flex-col items-center justify-center text-center py-24"
          style={{
            backgroundImage: `url("blur-bg.png")`,
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
          }}
        >
          <header className="text-center">
            <h2 className="text-white mt-4 text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold mb-24 lg:text-center md:text-center sm:text-left">
              Our Services
            </h2>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 4k:px-16">
            <div className="flex flex-col items-center">
              <img
                src="service-icon-1.png"
                alt="Custom Software Development"
                width={150}
                height={120}
                className="4k:w-[200px] 4k:h-[160px]"
              />
              <h3 className="text-xl sm:text-2xl 4k:text-5xl font-bold mt-4 justify-center">
                Custom Software Development
              </h3>
              <p className="text-gray-300 mt-4 px-4 sm:text-lg 4k:text-8xl justify-center">
                We provide expert consulting services to guide your digital
                transformation journey and optimize your IT infrastructure.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="service-icon-2.png"
                alt="Mobile Application Development"
                width={150}
                height={120}
                className="4k:w-[200px] 4k:h-[160px]"
              />
              <h3 className="text-xl sm:text-2xl 4k:text-5xl font-bold mt-4 justify-center">
                Mobile Application Development
              </h3>
              <p className="text-gray-300 mt-4 px-4 sm:text-lg 4k:text-8xl justify-center">
                Our team excels in custom software development, creating
                tailored solutions to meet your unique business needs.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="service-icon-3.png"
                alt="Dedicated Software Developer Team"
                width={150}
                height={120}
                className="4k:w-[200px] 4k:h-[160px]"
              />
              <h3 className="text-xl sm:text-2xl 4k:text-5xl font-bold mt-4 justify-center">
                Dedicated Software Developer Team
              </h3>
              <p className="text-gray-300 mt-4 px-4 sm:text-lg 4k:text-8xl justify-center">
                Our dedicated software developers team is committed to
                delivering high-quality software solutions tailored to meet your
                specific requirements.
              </p>
            </div>
            <Link href="/services">
              <button className="absolute bottom-4 right-4 px-4 py-2 md:px-6 md:py-3 text-lg md:text-xl lg:text-xl 4k:text-3xl bg-blue-500 text-white font-bold rounded hover:bg-[#0d1c9a] transition duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="min-h-screen flex items-center justify-center bg-[#0d1c9a] py-16 px-4">
        <div className="w-full max-w-lg p-8 bg-[#0d1c9a] rounded-md">
          <header className="text-center">
            <h2 className="text-white mt-2 text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold mb-14 lg:text-center md:text-center sm:text-left">
              Contact Us
            </h2>
          </header>
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-[#0d1c9a] mb-2">Full name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full p-3 4k:text-xl text-[#0d1c9a] rounded-md bg-blue-100 focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[#0d1c9a] mb-2">Email *</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 4k:text-xl text-[#0d1c9a] rounded-md bg-blue-100 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-[#0d1c9a] mb-2">Subject</label>
              <input
                type="text"
                placeholder="e.g., Support"
                className="w-full p-3 4k:text-xl text-[#0d1c9a] rounded-md bg-blue-100 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[#0d1c9a] mb-2">Message</label>
              <textarea
                placeholder="Enter your message"
                className="w-full p-3 4k:text-xl text-[#0d1c9a] rounded-md bg-blue-100 focus:outline-none"
                rows={6}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md 4k:text-xl"
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
