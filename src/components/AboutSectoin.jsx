import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-6 max-w-7xl mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        {/* Left Content */}
        <div>
          <h3 className="text-cyan-500 font-semibold mb-2 text-xl">About us</h3>
          <h4 className="text-cyan-600 font-bold uppercase text-sm mb-8">
            Consulting agency with 10 years of experience
          </h4>
          <p className="text-gray-600 mb-6">
           Shiv Sumitra Group Foundation is a registered public charitable trust (NGO) established in 2014 (Reg. No. 780/2014-15). Operating across Delhi, Uttar Pradesh, Haryana, Rajasthan, Jharkhand, and Bihar, the organization is dedicated to social welfare, education, healthcare, and rural development. Through sustainable initiatives, it aims to uplift marginalized communities, promote skill development, and improve livelihoods, fostering empowerment and positive change in society.

          </p>

          <blockquote className="border-l-4 border-cyan-500 pl-4 text-gray-800 italic mb-4">
            " A beacon of change since 2014, Shiv Sumitra Group Foundation (NGO Reg. 780/2014-15) transforms lives across 6 states through education, health initiatives, and community empowerment, turning compassion into actionable change for India's underserved. "
          </blockquote>

          <div>
            <p className="text-gray-800 font-semibold">Retd. Engg. Vinod Kumar</p>
            <p className="text-gray-500 text-sm">Founder & Managing Trustee</p>
          </div>
          <div>
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded text-sm sm:text-base">
                See More
              </button>
          </div>
        </div>


        {/* Right Image */}
        <div className="flex justify-center md:justify-end h-[500px]">
          <img
            src="src\assets\images\event1.jpg"
            alt="About us"
            className="rounded-md w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
