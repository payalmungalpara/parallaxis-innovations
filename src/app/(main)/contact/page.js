import React from "react";

const page = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center relative"
        style={{ backgroundImage: `url('/bg.png')` }}
      >
        {/* Overlay */}
        <h1 className="relative text-white font-bold font-mono text-4xl sm:text-6xl text-center">
          Contact Us
        </h1>
      </div>
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

export default page;
