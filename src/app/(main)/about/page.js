import React from 'react'

const page = () => {
  return (
    <div>
      {/* Header */}
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center relative"
        style={{ backgroundImage: `url('/bg.png')` }}
      >
        {/* Overlay */}
        <h1 className="relative text-white font-bold font-mono text-4xl sm:text-6xl text-center">
          About Us
        </h1>
      </div>
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
  </div>
)
}

export default page