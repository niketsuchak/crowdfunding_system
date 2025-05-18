import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-screen backgroundMain">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-tight">
            Empowering <br />
            Dreams <br />
            <span className="text-purple-400">Through <br />Blockchain</span>
          </h1>
          <p className="mb-8 text-base text-gray-300 md:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto">
            Join the future of crowdfunding with BlockFund. A decentralized platform 
            where innovative ideas meet blockchain technology to make dreams reality.
          </p>
          <Link 
            href="/create-campaign"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white transition duration-200 bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Start Your Campaign
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full text-white fill-current" viewBox="0 0 1440 120">
          <path d="M0,96L48,101.3C96,107,192,117,288,112C384,107,480,85,576,85.3C672,85,768,107,864,101.3C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
