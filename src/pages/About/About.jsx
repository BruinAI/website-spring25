import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Team from "./Team/Team";
import { FiChevronDown } from 'react-icons/fi';

export default function About() {
  return (
    <>
    <Navbar />
    {/* Fixed background section covering hero + intro + stats */}
    <section 
      className="relative w-full min-h-[95vh] bg-cover bg-center bg-scroll md:bg-fixed
                 bg-[size:cover]"
      style={{
        backgroundImage: `url('/website-spring25/assets/teamglasses.JPG')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        minHeight: '100vh',
        maxHeight: '100vh',
        position: 'relative'
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/[77%] z-0" />
      <div 
        className="absolute inset-0 z-[1] opacity-30"
        style={{
          background: 'linear-gradient(250deg, #5030AB 0%, transparent 33%)'
        }}
      />

      <div className="relative z-10 w-full text-white">
        {/* Hero Section */}
        <section className="w-full h-[30vh] flex items-center justify-center pt-40">
          <span className="flex items-center justify-center gap-2 sm:gap-3">
            <h1 className="relative text-3xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7069EC] via-[#AD70DE] to-[#EE78D0]">
              hi!
            </h1>
            <h1 className="relative z-10 text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-center text-white drop-shadow-xl">
              we are BruinAI
            </h1>
          </span>
        </section>

        {/* Intro blurb */}
        <section className="max-w-2xl mx-auto px-6 pt-8 pb-12 text-center">
          <p className="text-lg md:text-xl text-gray-200">
            BruinAI is a student-led organization at UCLA dedicated to advancing artificial intelligence through education, research, and real-world projects. We empower students to learn, build, and innovate with AI, fostering a collaborative and inclusive community.
          </p>
        </section>

        {/* Stats Box */}
        <div className="max-w-[80vw] mx-auto mb-12 rounded-lg bg-zinc-900/90 p-6 shadow-lg">
          <div className="align-top mb-3">
            <p className="text-xs text-gray-400 text-start">Within the past year, we had</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-4xl font-extrabold text-white">17</span>
              <span className="text-gray-300 text-xs sm:text-sm mt-2 text-center">External events</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-4xl font-extrabold text-white">12</span>
              <span className="text-gray-300 text-xs sm:text-sm mt-2 text-center">Company collaborations</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-4xl font-extrabold text-white">8</span>
              <span className="text-gray-300 text-xs sm:text-sm mt-2 text-center">Completed projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-4xl font-extrabold text-white">400+</span>
              <span className="text-gray-300 text-xs sm:text-sm mt-2 text-center">Conference Attendees</span>
            </div>
          </div>
        </div>
        {/* Down arrow below stats */}
        <div className="flex justify-center mt-6">
          <FiChevronDown className="text-white/55 animate-bounce drop-shadow-xl" size={21} aria-hidden="true" />
        </div>
      </div>
    </section>

    {/* Team Section scrolls over the fixed background area */}
    <Team />
    <Footer />
    </>
  );
}