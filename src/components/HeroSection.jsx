import React from "react";
import cityImage from "../assets/new-york-city.jpg";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom"
        style={{
          backgroundImage: `url(${cityImage})`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-16 text-white">
        
        <h1 className="text-7xl font-bold leading-tight">
          Dream Home <br />
          Awaits You
        </h1>

        {/* Typewriter Text */}
        <p className="mt-5 text-xl min-h-[90px] leading-8 whitespace-pre-line">
          <Typewriter
            words={[
              "Expert guidance from viewing\nto closing.",
              "Find luxury homes tailored\nfor you.",
              "Helping you discover your\nperfect property.",
              "Trusted real estate experts\nby your side.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </p>

        {/* Buttons */}
        <div className="flex gap-5 mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 duration-300 px-8 py-4 rounded-lg font-semibold">
            Schedule a viewing
          </button>

          <button className="border border-white hover:bg-white hover:text-black duration-300 px-8 py-4 rounded-lg font-semibold">
            Explore properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;